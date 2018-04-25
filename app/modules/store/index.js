const dialogsModule = require("ui/dialogs");
const dialogs = require('tns-core-modules/ui/dialogs');
const geolocation = require("~/nativescript-geolocation");
const SocialShare = require("~/nativescript-social-share");
const LoadingIndicator = require("~/nativescript-loading-indicator").LoadingIndicator;

const Stores = require("~/modules/store");
let selectedStore = {};
const appLoader = new LoadingIndicator();
const appLoaderOptions = {
    message: 'Processing...',
    progress: 0.65,
    android: {
        indeterminate: true,
        cancelable: true,
        cancelListener: function (dialog) { console.log("Loading cancelled") },
        max: 100,
        progressNumberFormat: "%1d/%2d",
        progressPercentFormat: 0.53,
        progressStyle: 1,
        secondaryProgress: 1
    },
    ios: {
        details: "Additional detail note!",
        margin: 10,
        dimBackground: true,
        color: "#4B9ED6", // color of indicator and labels
        // background box around indicator
        // hideBezel will override this if true
        backgroundColor: "yellow",
        hideBezel: true, // default false, can hide the surrounding bezel
    },
};

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
                    "company": "GYG Groceries",
                    "email": "carlydominguez@anivet.com",
                    "phone": "+1 (807) 488-3485",
                    "address": "424 Exeter Street, Ruaka, Kenya",
                    "about": "We offer fresh hygenic and apealing groceries, we also package for collection after an order and deliver where needed.\r\n",
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
                    "company": "Thika Tex",
                    "email": "rondajoyner@sarasonic.com",
                    "phone": "+1 (909) 593-2835",
                    "address": "650 Halsey Street, Thika, Kenya",
                    "about": "Bacon ipsum dolor amet sirloin flank chicken buffalo, short ribs t-bone pastrami pork loin meatloaf porchetta tongue ham kielbasa. Brisket kevin bresaola alcatra, sausage strip steak leberkas andouille drumstick rump turducken landjaeger sirloin meatloaf chuck.\r\n",
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
                    "company": "Nakumatt Galleria",
                    "email": "earnestinemorse@ultrasure.com",
                    "phone": "+1 (847) 576-2929",
                    "address": "855 Nevins Street, Galleria, Kenya",
                    "about": "Prosciutto short ribs swine, meatball hamburger tongue burgdoggen strip steak alcatra. Tri-tip shank capicola bresaola biltong, frankfurter venison turkey hamburger doner prosciutto ground round ball tip porchetta. Tri-tip landjaeger sausage pancetta. Corned beef biltong pork belly leberkas shank jerky kielbasa, sausage shankle.\r\n",
                    "registered": "2016-05-30T09:33:35 -03:00",
                    "latitude": 20.64026,
                    "longitude": -84.966638
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
                    "about": "Beef ribs alcatra cupim pig, brisket frankfurter rump fatback pastrami ribeye sausage landjaeger drumstick spare ribs sirloin. Bacon tail boudin swine filet mignon bresaola short loin beef ribs ground round pig andouille pork loin kielbasa cow. Beef pastrami tail bacon porchetta short ribs flank, tenderloin pork loin ball tip jerky biltong doner turducken spare ribs. Strip steak ground round tail short loin ham hock.\r\n",
                    "registered": "2015-02-04T12:23:04 -03:00",
                    "latitude": -40.303177,
                    "longitude": -131.742657
                },
                {
                    "_id": "5ade0f09344e042960b18ff1",
                    "guid": "8429fd95-4940-4740-9340-0f393f1400b9",
                    "isOpen": true,
                    "photo": "paleo1",
                    "owner": "Toni Hunter",
                    "gender": "female",
                    "company": "Rom Store",
                    "email": "tonihunter@pharmex.com",
                    "phone": "+1 (868) 428-2135",
                    "address": "624 Stillwell Avenue, Karasani, Kenya",
                    "about": "We offer fresh hygenic and apealing groceries, we also package for collection after an order and deliver where needed.\r\n",
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
                    "company": "Assistia Groceries",
                    "email": "sheilagalloway@maroptic.com",
                    "phone": "+1 (882) 457-3103",
                    "address": "629 Dearborn Court, Kitengela",
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
                    "company": "Tuskys Rongai",
                    "email": "maikline@rameon.com",
                    "phone": "+1 (821) 525-2778",
                    "address": "Muindi Mbingu Street (Kigali Street), Nairobi, Nairobi",
                    "about": "Turkey burgdoggen tri-tip sirloin pork belly chuck hamburger swine shoulder jerky pancetta kielbasa. Short loin leberkas rump, ball tip bacon meatloaf pork belly pig sausage kevin turducken drumstick ham bresaola shoulder.\r\n",
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
                    "company": "Tuskys Chap! Chap!",
                    "email": "kittyhogan@wazzu.com",
                    "phone": "+1 (878) 445-3735",
                    "address": "942 Garden Street, Hartsville/Hartley, Nebraska, 143",
                    "about": "Turkey burgdoggen tri-tip sirloin pork belly chuck hamburger swine shoulder jerky pancetta kielbasa. Short loin leberkas rump, ball tip bacon meatloaf pork belly pig sausage kevin turducken drumstick ham bresaola shoulder.\r\n",
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
                    "company": "Intendo Franchise",
                    "email": "hardingdillard@franscene.com",
                    "phone": "+1 (997) 492-2082",
                    "address": "271 Devoe Street, Nairobi, Kenya",
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
                    "company": "Orbi Buzzworks",
                    "email": "tinamorin@buzzworks.com",
                    "phone": "+1 (958) 449-2389",
                    "address": "Moi Avenue (Haile Selassie Avenue), Nairobi, Nairobi",
                    "about": "Chicken cow leberkas doner. Venison sirloin sausage spare ribs. Short ribs pastrami boudin filet mignon pancetta, turkey beef ribs swine alcatra prosciutto meatball ham. Pancetta prosciutto cow andouille, buffalo pork chop pig ribeye landjaeger jowl. Doner shoulder pork, turducken buffalo pork chop filet mignon rump pork loin alcatra chicken.\r\n",
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
                    "company": "Langata Hyper",
                    "email": "hammondwyatt@insurity.com",
                    "phone": "+1 (918) 505-3956",
                    "address": "666 Langata Road, Nairobi, Nairobi",
                    "about": "Pork loin rump picanha strip steak tri-tip shank alcatra spare ribs kielbasa tenderloin meatloaf fatback pancetta tongue. Ground round meatloaf sausage doner. Ham strip steak sirloin filet mignon kielbasa, ground round cupim hamburger cow chuck spare ribs meatloaf short ribs. Turducken shank flank meatloaf turkey, tri-tip tail hamburger pork.\r\n",
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
                    "company": "Capital Center",
                    "email": "vangbarrett@maroptic.com",
                    "phone": "+1 (925) 510-2496",
                    "address": "306 Mombasa Road, Nairobi, Nairobi",
                    "about": "Beef ribs alcatra cupim pig, brisket frankfurter rump fatback pastrami ribeye sausage landjaeger drumstick spare ribs sirloin. Bacon tail boudin swine filet mignon bresaola short loin beef ribs ground round pig andouille pork loin kielbasa cow.\r\n",
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
                    "company": "Ukay Stores",
                    "email": "chrismcclain@emtrak.com",
                    "phone": "+1 (801) 550-2966",
                    "address": "327 Mwanzi Road (Ring Road), Nairobi, Nairobi",
                    "about": " Beef pastrami tail bacon porchetta short ribs flank, tenderloin pork loin ball tip jerky biltong doner turducken spare ribs. Strip steak ground round tail short loin ham hock. Ex velit est enim qui qui quis velit velit cupidatat reprehenderit ipsum do labore cillum. Culpa reprehenderit cillum qui qui sint cillum culpa. Velit cupidatat magna adipisicing adipisicing irure ex ut in voluptate. Et officia dolor eu ut cupidatat ut aliqua aliquip dolor sit ad commodo id qui.\r\n",
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
                    "company": "Comvoy Groceries",
                    "email": "dillonross@zoid.com",
                    "phone": "+1 (896) 512-2545",
                    "address": "332 Lincoln Terrace, Catherine, Kenya",
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
                    "address": "908 Lake Street, Hurlinghum, Nairobi",
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
                    "company": "Adams Marketoid",
                    "email": "sawyercompton@marketoid.com",
                    "phone": "+1 (876) 410-3810",
                    "address": "193 Loring Avenue, Adamstown, Adams",
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
                    "company": "Pearle Stores",
                    "email": "pittmanrich@pearlesex.com",
                    "phone": "+1 (868) 473-2253",
                    "address": "279 Hooper Street, Delwood, Kilimani",
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
                    "company": "Digial Groceries",
                    "email": "rayturner@yogasm.com",
                    "phone": "+1 (894) 485-2057",
                    "address": "705 Bancroft Place, Winesburg, Nairobi",
                    "about": "Aliqua nostrud occaecat id officia labore proident Lorem esse incididunt. Tempor duis in aliqua et adipisicing laborum occaecat Lorem consectetur elit sunt. Tempor occaecat proident proident culpa eu minim dolor adipisicing sint veniam aute aute. Labore aute excepteur non veniam. Enim incididunt Lorem mollit et aliquip tempor. Elit quis non eiusmod excepteur dolor sunt ullamco.\r\n",
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
                    "company": "Talendula Store",
                    "email": "buchananreyes@acusage.com",
                    "phone": "+1 (999) 489-3539",
                    "address": "394 Independence Avenue, Egerton, Kenya",
                    "about": "Eiusmod eu amet incididunt exercitation ad nostrud velit Lorem Lorem cupidatat do deserunt ipsum est. In sunt labore veniam cupidatat ex tempor velit laboris minim quis nisi. Ea do nisi sunt anim laboris. In pariatur velit sunt quis minim mollit aute incididunt. Sit ea enim et labore consectetur esse laborum.\r\n",
                    "registered": "2015-09-30T11:56:19 -03:00",
                    "latitude": 2.662161,
                    "longitude": -65.954973
                }
            ],
            isLoading: false,
            listLoaded: false,
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
        shareApp() {
            dialogs.confirm('Lets share this app!')
                .then(share => {
                    if (share) {
                        SocialShare.shareUrl("https://www.gyg.org/getyourgroceries", "Lets get your groceries home", "How would you like to share this app?");
                    }
                })
        },
        goToDetail(item) {
            selectedStore = item;
            this.$showModal(StoreDetail)
        },
    },
    template: `
        <Page xmlns:lv="nativescript-ui-listview">
            <ActionBar title="Stores" automationText="ActionBar" class="stores-action-bar " color="white" backgroundColor="black">
                <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack()"></NavigationButton>
                <ActionItem ios.systemIcon="2" android.systemIcon="ic_menu_share" ios.position="right" @tap="shareApp"></ActionItem>
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
            const that = this;
            appLoader.show(appLoaderOptions);
            setTimeout(function () {
                appLoader.hide();
                that.$modal.close();
                setTimeout(function () {
                    dialogs.alert('Congratulations! Your order has been received and is being processed. You will receive items within 12 hours.')
                        .then(() => {
                            console.log("Dialog closed")
                        })
                }, 500)
            }, 2000);
        }
    },
    template: `
        <Page xmlns:lv="nativescript-ui-listview">
            <ScrollView>
                <StackLayout>
                    <FlexboxLayout flexDirection="row" class="store-detail-item">
                        <StackLayout  class="store-details" width="100%">
                            <Label :text="selectedStore.company" class="store-detail store-heading" />
                            <TextView editable="false" class="store-text">
                                <FormattedString>
                                    <Span :text="selectedStore.address" class="store-detail store-address"  />
                                </FormattedString>
                            </TextView>
                            <Image :src="selectedStore.photo ? '~/images/' + selectedStore.photo + '.jpg' : ''" class="thumb store-image" width="100%"/>
                            <TextView editable="false" class="store-text">
                                <FormattedString>
                                    <Span :text="selectedStore.about" class="store-detail store-about"  />
                                </FormattedString>
                            </TextView>
                            <Button text="Buy From Store" @tap="confirmOrder" />
                            <Button @tap="$modal.close" text="Close" width="100%"/>

                        </StackLayout>
                    </FlexboxLayout>                   
                </StackLayout>
            </ScrollView>
    </Page>
  `
};


module.exports = Store;