const dialogsModule = require("ui/dialogs");
const dialogs = require('tns-core-modules/ui/dialogs');

const GroceryApi = require("~/api/grocery");
const Stores = require("~/modules/store");

const Grocery = {
    data() {
        return {
            groceryList: [],
            grocery: '',
            isLoading: false,
            listLoaded: false,
        };
    },
    created() {
        const that = this;
        GroceryApi.load()
            .then(function (data) {
                that.isLoading = false;
                that.listLoaded = true;
                data.forEach(function (grocery) {
                    that.groceryList.push({
                        name: grocery.Name,
                        id: grocery._id,
                        done: false,
                        deleted: false,
                    });
                });
            })
    },
    computed: {},
    methods: {
        add() {
            const that = this;

            // Check for empty submissions
            if (!this.grocery.length) {
                dialogsModule.alert({
                    message: "A new grocery item cannot be empty",
                    okButtonText: "OK"
                });
                return;
            }

            // Dismiss the keyboard
            GroceryApi.add(this.grocery)
                .then(function (data) {
                    that.groceryList.unshift({
                        name: data.Name,
                        id: data._id,
                        done: false,
                        deleted: false,
                    });
                })
                .catch(function () {
                    dialogsModule.alert({
                        message: "An error occurred while adding an item to your list.",
                        okButtonText: "OK"
                    });
                });

            // Empty the input field
            that.grocery = '';
        },
        toggleDone(item) {
            this.groceryList.forEach(function (g) {
                if (g.id === item.id) {
                    g.done = !item.done;
                }
            });
        },
        remove(item) {
            const that = this;
            GroceryApi.remove(item.id)
                .then(function (data) {
                    const index = that.groceryList.indexOf(item);
                    that.groceryList.splice(index, 1);
                })
        },
        changePage() {
            console.log("Navigating");
            this.$navigateTo(Stores);
        }
    },
    template: `
        <Page xmlns:lv="nativescript-ui-listview">
            <ActionBar :title="groceryList.length ? 'Edit Grocery List' : 'New Grocery List'" color="white" backgroundColor="black" automationText="ActionBar">
                <ActionItem @tap="changePage"><Button text="DONE"/></ActionItem>
            </ActionBar>
            <GridLayout rows="auto, *">
                <GridLayout row="0" columns="*, auto" class="add-bar">
                    <TextField id="groceryTextField" v-model="grocery" id="grocery" ref="groceryInput" hint="Enter a grocery item" col="0" />
                    <Image src="~/images/add.png" @tap="add" col="1" />
                </GridLayout>
                

                <ListView 
                    class="list-group page-base groceries-list-view" 
                    for="item in groceryList" 
                    @itemTap="toggleDone(item)" 
                    :class="listLoaded ? 'visible' : ''" 
                    row="1" 
                >
                    <v-template>    
                        <GridLayout columns="*, auto" class="container" :opacity="item.done ? '0.8' : '1'">
                              <StackLayout
                                col="0"
                                orientation="horizontal"
                                class="tap-target"
                                @tap="toggleDone(item)">
                                    <Image src="~/images/checkbox.png" class="check-box"></Image>
                                    <Label :text="item.name| capitalizeWord" :class="item.done && !item.deleted ? 'line-through' : ''"></Label>
                                </StackLayout>
                                <GridLayout
                                    col="1"
                                    class="delete-container"
                                    @tap="remove(item)"
                                    v-if="item.done">
                                    <StackLayout>
                                        <Image src="~/images/delete.png"></Image>
                                    </StackLayout>
                                </GridLayout>
                        </GridLayout>
                    </v-template>
                </ListView>
                
                <ActivityIndicator :busy="isLoading" row="1" horizontalAlignment="center" verticalAlignment="center" />
            </GridLayout>

        </Page>
  `
};

module.exports = Grocery;