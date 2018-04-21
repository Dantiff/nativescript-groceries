var dialogsModule = require("ui/dialogs");

const CreateEdit = {
    data() {
        return {};
    },
    computed: {},
    methods: {},
    template: `
        <Page actionBarHidden="true">
            <FlexboxLayout>
                <StackLayout orientation="vertical">
                
<TextView editable="false">
   <FormattedString>
       <Span text="This is a text view that uses attributed text. You can use text attributes such as " />
       <Span text="bold, " fontWeight="Bold" />
       <Span text="italic " fontStyle="Italic" />
       <Span text="and " />
       <Span text="underline." textDecoration="Underline" />
   </FormattedString>
</TextView>
                    
                </StackLayout>
            </FlexboxLayout>
        </Page>
  `
};

module.exports = CreateEdit;