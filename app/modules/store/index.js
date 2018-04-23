const dialogsModule = require("ui/dialogs");
const dialogs = require('tns-core-modules/ui/dialogs');
const geolocation = require("~/nativescript-geolocation");

const Stores = require("~/modules/store");
const Groceries = require("~/modules/grocery");
let selectedStore = {};

const Store = {
    data() {
        return {
            storeList: [
                {
                    "_id": "5ade0f09e5adff84cbb355e5",
                    "guid": "819bc7ea-b1ae-4b5f-a25b-d55e6cb8c79f",
                    "isOpen": false,
                    "photo": "paleo9",
                    "owner": "Carly Dominguez",
                    "gender": "female",
                    "company": "Orbixtar Anivet",
                    "email": "carlydominguez@anivet.com",
                    "phone": "+1 (807) 488-3485",
                    "address": "424 Exeter Street, Yogaville, Maryland, 7327",
                    "about": "Velit exercitation ipsum non anim ut irure. Dolor esse voluptate cupidatat Lorem do duis tempor aute. Est consectetur nulla quis eu ea et exercitation ut velit exercitation do. Occaecat proident dolore cillum mollit sit eu. Consequat consequat nostrud quis quis tempor cillum velit sit non consectetur dolore.\r\n",
                    "registered": "2014-11-05T10:52:25 -03:00",
                    "latitude": 2.558502,
                    "longitude": -62.444368
                },
                {
                    "_id": "5ade0f09590edce30aa5b1da",
                    "guid": "c5be7f90-db14-4bc1-849b-28207e23aaa1",
                    "isOpen": false,
                    "photo": "paleo2",
                    "owner": "Ronda Joyner",
                    "gender": "female",
                    "company": "Datacator Sarasonic",
                    "email": "rondajoyner@sarasonic.com",
                    "phone": "+1 (909) 593-2835",
                    "address": "650 Halsey Street, Sharon, Guam, 6262",
                    "about": "Culpa mollit voluptate cupidatat esse minim deserunt duis cillum tempor cillum labore id. Qui sint laborum tempor ex exercitation et officia non. Elit sint nisi do labore. Deserunt officia commodo elit amet sunt anim tempor voluptate sunt officia. Veniam veniam nostrud voluptate ex aute fugiat reprehenderit officia nulla irure.\r\n",
                    "registered": "2014-10-17T06:35:43 -03:00",
                    "latitude": -61.078909,
                    "longitude": 40.991561
                },
                {
                    "_id": "5ade0f09dee91a689873b549",
                    "guid": "9cd7c605-695c-4c5c-b668-3d2df27c89bf",
                    "isOpen": true,
                    "photo": "paleo5",
                    "owner": "Earnestine Morse",
                    "gender": "female",
                    "company": "Cedward Ultrasure",
                    "email": "earnestinemorse@ultrasure.com",
                    "phone": "+1 (847) 576-2929",
                    "address": "855 Nevins Street, Dowling, Kentucky, 2834",
                    "about": "Sint incididunt irure ipsum eu mollit anim aliquip dolore voluptate est non enim. Aliquip duis quis consequat nostrud mollit fugiat amet mollit. Ea officia commodo dolor ipsum sint sint laboris cillum irure. Cupidatat deserunt est nulla laboris. Reprehenderit amet ad officia duis officia adipisicing eu laborum proident mollit consectetur. Dolor in consectetur dolore occaecat aliquip enim proident fugiat dolor.\r\n",
                    "registered": "2016-05-30T09:33:35 -03:00",
                    "latitude": 20.64026,
                    "longitude": -84.966638
                },
                {
                    "_id": "5ade0f09344e042960b18ff1",
                    "guid": "8429fd95-4940-4740-9340-0f393f1400b9",
                    "isOpen": true,
                    "photo": "paleo1",
                    "owner": "Toni Hunter",
                    "gender": "female",
                    "company": "Comtract Pharmex",
                    "email": "tonihunter@pharmex.com",
                    "phone": "+1 (868) 428-2135",
                    "address": "624 Stillwell Avenue, Englevale, Wisconsin, 1637",
                    "about": "Do proident ea cupidatat velit et non dolore ea sint. Ullamco eiusmod labore esse laborum velit. Consequat cupidatat commodo in ipsum Lorem. Voluptate enim amet pariatur officia nisi cupidatat labore ipsum amet qui aliqua cillum Lorem. Ut ex id Lorem reprehenderit elit nostrud dolore aliqua eiusmod esse anim ex elit. Officia quis Lorem qui ullamco qui duis ullamco et officia tempor.\r\n",
                    "registered": "2016-03-06T02:36:07 -03:00",
                    "latitude": 32.674028,
                    "longitude": 79.286219
                },
                {
                    "_id": "5ade0f09e84ab8a908063935",
                    "guid": "4626202e-cb62-4b6f-bddc-9588b562ea10",
                    "isOpen": true,
                    "photo": "paleo7",
                    "owner": "Sheila Galloway",
                    "gender": "female",
                    "company": "Assistia Maroptic",
                    "email": "sheilagalloway@maroptic.com",
                    "phone": "+1 (882) 457-3103",
                    "address": "629 Dearborn Court, Kempton, Wyoming, 5391",
                    "about": "Adipisicing ea esse et ex nulla proident cupidatat dolor quis et do. Aliquip eu pariatur nisi consectetur ut ullamco est est culpa Lorem. Qui commodo exercitation minim duis ullamco commodo dolor ad velit occaecat.\r\n",
                    "registered": "2017-02-19T11:57:29 -03:00",
                    "latitude": 81.029611,
                    "longitude": -73.234003
                },
                {
                    "_id": "5ade0f09ffae14ad035fc41a",
                    "guid": "21113066-0fcc-4bb1-9319-b0408db23c06",
                    "isOpen": true,
                    "photo": "paleo3",
                    "owner": "Mai Kline",
                    "gender": "female",
                    "company": "Nitracyr Rameon",
                    "email": "maikline@rameon.com",
                    "phone": "+1 (821) 525-2778",
                    "address": "108 Verona Street, Elliott, Pennsylvania, 425",
                    "about": "Veniam ex et esse officia ad sit esse. Reprehenderit enim adipisicing quis mollit aliqua cillum ex excepteur minim reprehenderit reprehenderit consectetur ad. Cillum minim ullamco laborum aute magna elit sit et magna deserunt. Eu magna consectetur labore in anim. Nulla velit amet ad occaecat veniam eiusmod Lorem in tempor deserunt sunt. Officia amet consequat ullamco fugiat sit.\r\n",
                    "registered": "2015-02-04T12:23:04 -03:00",
                    "latitude": -40.303177,
                    "longitude": -131.742657
                },
                {
                    "_id": "5ade0f093dafa15cdae21788",
                    "guid": "8efc3b39-8c54-4471-bb7f-62f6d982b2c7",
                    "isOpen": false,
                    "photo": "paleo9",
                    "owner": "Kitty Hogan",
                    "gender": "female",
                    "company": "Kindaloo Wazzu",
                    "email": "kittyhogan@wazzu.com",
                    "phone": "+1 (878) 445-3735",
                    "address": "942 Garden Street, Hartsville/Hartley, Nebraska, 143",
                    "about": "Irure exercitation id ut qui mollit consectetur cupidatat laboris aliqua consequat cupidatat. In officia labore esse ex velit adipisicing. Tempor ex ullamco nostrud voluptate proident minim incididunt veniam et reprehenderit sint. Esse elit magna duis veniam laboris incididunt sunt et laboris tempor est officia. Cillum culpa minim excepteur Lorem do. Eiusmod nisi exercitation sint ex cillum eiusmod exercitation cillum officia laboris anim sit consectetur est. Mollit enim et commodo nisi.\r\n",
                    "registered": "2016-01-13T07:38:22 -03:00",
                    "latitude": -81.090181,
                    "longitude": -157.239312
                },
                {
                    "_id": "5ade0f09dbfee09c7fcb613d",
                    "guid": "9fbd110d-58e4-4712-b8fe-8698f547adae",
                    "isOpen": true,
                    "photo": "paleo9",
                    "owner": "Harding Dillard",
                    "gender": "male",
                    "company": "Interodeo Franscene",
                    "email": "hardingdillard@franscene.com",
                    "phone": "+1 (997) 492-2082",
                    "address": "271 Devoe Street, Harmon, Oklahoma, 3496",
                    "about": "Quis duis nostrud sunt aliquip sit consequat. Qui nulla elit do eiusmod laboris. Occaecat consectetur aute fugiat voluptate adipisicing exercitation veniam cupidatat nisi et officia. Pariatur reprehenderit labore proident anim. Deserunt cillum deserunt mollit quis.\r\n",
                    "registered": "2017-12-11T08:56:27 -03:00",
                    "latitude": -61.065271,
                    "longitude": -162.97135
                },
                {
                    "_id": "5ade0f09e0b0388a7ffdcfee",
                    "guid": "1769abcc-f4aa-4736-8214-1ca169958ce8",
                    "isOpen": true,
                    "photo": "paleo8",
                    "owner": "Tina Morin",
                    "gender": "female",
                    "company": "Orbiflex Buzzworks",
                    "email": "tinamorin@buzzworks.com",
                    "phone": "+1 (958) 449-2389",
                    "address": "228 Madeline Court, Wacissa, North Carolina, 2692",
                    "about": "Dolor nulla ad duis esse dolore consequat proident mollit commodo in duis laborum sint anim. Et quis commodo commodo et culpa esse tempor veniam incididunt voluptate laborum sit sunt. Aliquip sunt dolor ex eu consequat deserunt ex fugiat dolore ut aliquip. Cupidatat labore esse dolore nulla labore ut anim ad consectetur mollit sunt aliquip aute adipisicing. Do fugiat Lorem ullamco nisi cillum non elit commodo nulla occaecat magna aute enim labore. Nostrud amet ea deserunt esse amet. Minim ullamco exercitation ex cillum aliqua sint eiusmod fugiat exercitation labore.\r\n",
                    "registered": "2017-10-21T11:19:54 -03:00",
                    "latitude": -59.448592,
                    "longitude": -141.031375
                },
                {
                    "_id": "5ade14b0f8176dd8a1354e8e",
                    "guid": "bbfc70d8-d93e-4824-8683-1fc3f21db0ca",
                    "isOpen": true,
                    "photo": "paleo5",
                    "owner": "Hammond Wyatt",
                    "gender": "male",
                    "company": "Zanity Insurity",
                    "email": "hammondwyatt@insurity.com",
                    "phone": "+1 (918) 505-3956",
                    "address": "666 Howard Place, Grimsley, Michigan, 2026",
                    "about": "Sint nisi adipisicing sit deserunt. Anim do enim nulla nostrud nisi occaecat ullamco nisi deserunt amet in voluptate fugiat irure. Excepteur excepteur fugiat duis excepteur esse aute voluptate elit sunt esse. Sunt proident elit ut cupidatat ipsum incididunt. Laborum proident minim esse deserunt fugiat sunt aute et. Veniam sunt aute et officia cillum magna nostrud laboris ex veniam duis ullamco officia fugiat. Veniam sint officia consectetur velit quis exercitation et cupidatat.\r\n",
                    "registered": "2014-06-11T12:28:58 -03:00",
                    "latitude": 42.408019,
                    "longitude": 72.934818
                },
                {
                    "_id": "5ade14b0c25bfe3e7f2c02ed",
                    "guid": "1f4d2da0-e8ec-44df-a0f9-17ed346a0de1",
                    "isOpen": true,
                    "photo": "paleo1",
                    "owner": "Vang Barrett",
                    "gender": "male",
                    "company": "Cemention Maroptic",
                    "email": "vangbarrett@maroptic.com",
                    "phone": "+1 (925) 510-2496",
                    "address": "306 Clarendon Road, Tibbie, Colorado, 8795",
                    "about": "Eiusmod quis et dolor Lorem tempor ad. Non laborum magna laborum minim tempor irure. Officia cillum dolor elit dolor. Deserunt duis ea ad laborum aliqua sit non aute voluptate. Ullamco reprehenderit minim non ad velit. Elit proident est et ipsum.\r\n",
                    "registered": "2018-01-09T09:20:04 -03:00",
                    "latitude": -43.693525,
                    "longitude": 149.063676
                },
                {
                    "_id": "5ade14b006cdaf90b965dfec",
                    "guid": "f80276ef-d04a-4124-b525-da696d2fbe41",
                    "isOpen": false,
                    "photo": "paleo1",
                    "owner": "Chris Mcclain",
                    "gender": "female",
                    "company": "Comtour Emtrak",
                    "email": "chrismcclain@emtrak.com",
                    "phone": "+1 (801) 550-2966",
                    "address": "327 Dekalb Avenue, Watrous, Wisconsin, 8432",
                    "about": "Exercitation ex proident deserunt fugiat fugiat ipsum est. Fugiat est sit ad voluptate exercitation. Ad laborum sit culpa laborum esse occaecat commodo nulla laboris deserunt mollit nulla nisi mollit. Ex velit est enim qui qui quis velit velit cupidatat reprehenderit ipsum do labore cillum. Culpa reprehenderit cillum qui qui sint cillum culpa. Velit cupidatat magna adipisicing adipisicing irure ex ut in voluptate. Et officia dolor eu ut cupidatat ut aliqua aliquip dolor sit ad commodo id qui.\r\n",
                    "registered": "2017-12-28T06:18:49 -03:00",
                    "latitude": 20.123379,
                    "longitude": -157.572169
                },
                {
                    "_id": "5ade14b01ccc8cf447099ba5",
                    "guid": "912a2249-206a-4e45-98ca-8fc191bf77fd",
                    "isOpen": true,
                    "photo": "paleo8",
                    "owner": "Dillon Ross",
                    "gender": "male",
                    "company": "Comvoy Zoid",
                    "email": "dillonross@zoid.com",
                    "phone": "+1 (896) 512-2545",
                    "address": "332 Lincoln Terrace, Catherine, North Dakota, 5250",
                    "about": "Lorem nostrud nostrud non ad nisi sunt officia amet eu dolore. Esse eu adipisicing nostrud amet elit ex. Sunt voluptate incididunt excepteur magna irure anim veniam cillum aliquip aliqua. Incididunt excepteur laboris Lorem tempor. Commodo labore deserunt sunt eu officia ullamco sit voluptate aliqua id fugiat nisi eiusmod. Laborum officia labore aliquip enim et incididunt sunt.\r\n",
                    "registered": "2017-10-20T04:56:53 -03:00",
                    "latitude": -21.176033,
                    "longitude": -20.644349
                },
                {
                    "_id": "5ade14b0d8009ea7df1958e9",
                    "guid": "903c6805-3e9c-4809-947e-41aa50b54f16",
                    "isOpen": false,
                    "photo": "paleo8",
                    "owner": "Harriett Case",
                    "gender": "female",
                    "company": "Geostele Earthpure",
                    "email": "harriettcase@earthpure.com",
                    "phone": "+1 (812) 536-3199",
                    "address": "908 Lake Street, Haring, Illinois, 1402",
                    "about": "Excepteur ad elit fugiat eiusmod aliqua commodo proident ut qui excepteur. Officia est nostrud consequat nostrud nulla occaecat qui adipisicing. Esse incididunt nulla labore minim amet. Ullamco do nisi id in est. Consectetur reprehenderit Lorem irure eu fugiat nisi officia proident.\r\n",
                    "registered": "2014-08-25T02:48:43 -03:00",
                    "latitude": -40.768421,
                    "longitude": 71.029039
                },
                {
                    "_id": "5ade14b0d0918c8aa343a0ac",
                    "guid": "fdb457de-f416-4cb6-945f-8840329102eb",
                    "isOpen": false,
                    "photo": "paleo8",
                    "owner": "Sawyer Compton",
                    "gender": "male",
                    "company": "Kyagoro Marketoid",
                    "email": "sawyercompton@marketoid.com",
                    "phone": "+1 (876) 410-3810",
                    "address": "193 Loring Avenue, Adamstown, Connecticut, 845",
                    "about": "Enim anim sint eu aliquip mollit et cillum esse sint voluptate Lorem ea. Qui culpa deserunt laboris ipsum elit culpa qui id labore elit deserunt. Duis culpa cupidatat veniam Lorem. Cupidatat ut proident id quis ex voluptate tempor adipisicing ad.\r\n",
                    "registered": "2014-01-23T11:49:38 -03:00",
                    "latitude": -2.496955,
                    "longitude": 152.841648
                },
                {
                    "_id": "5ade14b040f4ed86e2571db7",
                    "guid": "59d8c7d9-ba1c-450c-a7b5-16afb18e951a",
                    "isOpen": true,
                    "photo": "paleo9",
                    "owner": "Pittman Rich",
                    "gender": "male",
                    "company": "Octocore Pearlesex",
                    "email": "pittmanrich@pearlesex.com",
                    "phone": "+1 (868) 473-2253",
                    "address": "279 Hooper Street, Delwood, Louisiana, 9393",
                    "about": "Officia consequat nostrud ex quis reprehenderit eiusmod magna ex Lorem. Ipsum incididunt ex do laboris pariatur mollit enim dolor dolor culpa nulla consectetur ut id. Enim occaecat tempor consequat exercitation.\r\n",
                    "registered": "2017-11-16T10:21:23 -03:00",
                    "latitude": -23.611105,
                    "longitude": 131.279513
                },
                {
                    "_id": "5ade14b0622095d5c8034107",
                    "guid": "54b177f6-9fed-4131-a350-d0818b2fed48",
                    "isOpen": false,
                    "photo": "paleo5",
                    "owner": "Ray Turner",
                    "gender": "male",
                    "company": "Digial Yogasm",
                    "email": "rayturner@yogasm.com",
                    "phone": "+1 (894) 485-2057",
                    "address": "705 Bancroft Place, Winesburg, New York, 7216",
                    "about": "Culpa cupidatat est magna esse consequat. Aliqua nostrud occaecat id officia labore proident Lorem esse incididunt. Tempor duis in aliqua et adipisicing laborum occaecat Lorem consectetur elit sunt. Tempor occaecat proident proident culpa eu minim dolor adipisicing sint veniam aute aute. Labore aute excepteur non veniam. Enim incididunt Lorem mollit et aliquip tempor. Elit quis non eiusmod excepteur dolor sunt ullamco.\r\n",
                    "registered": "2014-04-19T11:01:02 -03:00",
                    "latitude": -72.136852,
                    "longitude": 63.191035
                },
                {
                    "_id": "5ade14b0848c6e303c2ac134",
                    "guid": "05460b07-397a-4f48-a9e0-1017098f6d22",
                    "isOpen": false,
                    "photo": "paleo4",
                    "owner": "Buchanan Reyes",
                    "gender": "male",
                    "company": "Talendula Acusage",
                    "email": "buchananreyes@acusage.com",
                    "phone": "+1 (999) 489-3539",
                    "address": "394 Independence Avenue, Eggertsville, New Mexico, 1112",
                    "about": "Eiusmod eu amet incididunt exercitation ad nostrud velit Lorem Lorem cupidatat do deserunt ipsum est. In sunt labore veniam cupidatat ex tempor velit laboris minim quis nisi. Ea do nisi sunt anim laboris. In pariatur velit sunt quis minim mollit aute incididunt. Sit ea enim et labore consectetur esse laborum.\r\n",
                    "registered": "2015-09-30T11:56:19 -03:00",
                    "latitude": 2.662161,
                    "longitude": -65.954973
                }
            ],
            isLoading: false,
            listLoaded: false,
            Groceries: Groceries,
        };
    },
    created() {
        const that = this;
        // this.checkEnableLocation();
    },
    computed: {},
    methods: {
        onButtonTap() {
            console.log("Button was pressed");
        },
        onItemTap: function (args) {
            console.log('Item with index: ' + args.index + ' tapped');
        },
        checkEnableLocation() {
            const that = this;
            geolocation.isEnabled().then(function (isEnabled) {
                if (!isEnabled) {
                    geolocation.enableLocationRequest()
                        .then(function () {
                            console.log("location permissions granted");
                            that.getUserLocation();
                        }, function (e) {
                            console.log("Error: " + (e.message || e));
                        });
                }
                that.getUserLocation();
            }, function (e) {
                console.log("Error: " + (e.message || e));
            });
        },
        getUserLocation() {
            const that = this;
            const location = geolocation.getCurrentLocation({ desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000 }).
                then(function (loc) {
                    if (loc) {
                        console.log("Current location is: " + loc);
                    }
                }, function (e) {
                    console.log("Error: " + e.message);
                });
        },
        fetchStores() {
            // Get stores from google api
        },
        toggleDone(item) {
            // Toggle done
        },
        changePage() {
            console.log("Navigating");
        },
        goToDetail(item) {
            selectedStore = item;
            this.$showModal(StoreDetail)
        },
    },
    template: `
        <Page xmlns:lv="nativescript-ui-listview">
            <ActionBar title="Stores" automationText="ActionBar" class="stores-action-bar " color="white" backgroundColor="black">
                <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateTo(Groceries)"></NavigationButton>
                <ActionItem ios.systemIcon="2" android.systemIcon="ic_menu_share" ios.position="right"></ActionItem>
            </ActionBar>

            <ListView class="list-group" for="item in storeList" @itemTap="onItemTap" style="height:auto">
                <v-template>
                    <FlexboxLayout flexDirection="row" class="store-list-item">
                        <Image :src="item.photo ? '~/images/' + item.photo + '.jpg' : ''" class="thumb store-image" />
                        <StackLayout  class="store-details">
                            <Label :text="item.company" class="store-detail store-heading" />
                            <TextView editable="false" class="store-text">
                                <FormattedString>
                                    <Span :text="item.address" class="store-detail store-address"  />
                                </FormattedString>
                            </TextView>
                            <TextView editable="false" class="store-text">
                                <FormattedString>
                                    <Span :text="item.about.toString().slice(0, 100) + ' ...'" class="store-detail store-about"  />
                                </FormattedString>
                            </TextView>
                            <Button text="Select" @tap="goToDetail(item)" />

                        </StackLayout>
                    </FlexboxLayout>
                </v-template>
            </ListView>
            
        </Page>
  `
};


const StoreDetail = {
    data() {
        return {
            selectedStore: selectedStore,
        };
    },
    methods: {
        confirmOrder() {
            this.$navigateBack();
            setTimeout(function () {
                dialogs.alert('Congratulations! Your order has been received and is being processed. You will receive items within 12 hours.')
                    .then(() => {
                        console.log("Dialog closed")
                    })
            }, 500)
        }
    },
    template: `
        <Page xmlns:lv="nativescript-ui-listview">
            <ActionBar title="Stores" automationText="ActionBar" class="stores-action-bar " color="white" backgroundColor="black">
                <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack()"></NavigationButton>
                <ActionItem ios.systemIcon="2" android.systemIcon="ic_menu_share" ios.position="right"></ActionItem>
            </ActionBar>
            <FlexboxLayout flexDirection="row" class="store-detail-item">
                <Image :src="selectedStore.photo ? '~/images/' + selectedStore.photo + '.jpg' : ''" class="thumb store-image" />
                <StackLayout  class="store-details">
                    <Label :text="selectedStore.company" class="store-detail store-heading" />
                    <TextView editable="false" class="store-text">
                        <FormattedString>
                            <Span :text="selectedStore.address" class="store-detail store-address"  />
                        </FormattedString>
                    </TextView>
                    <TextView editable="false" class="store-text">
                        <FormattedString>
                            <Span :text="selectedStore.about" class="store-detail store-about"  />
                        </FormattedString>
                    </TextView>
                    <Button text="Buy From Store" @tap="confirmOrder" />

                </StackLayout>
            </FlexboxLayout>
    </Page>
  `
};


module.exports = Store;