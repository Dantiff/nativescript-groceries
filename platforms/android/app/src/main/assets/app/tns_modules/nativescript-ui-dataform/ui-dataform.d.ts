import * as commonModule from "./ui-dataform.common";
export declare class RadDataForm extends commonModule.RadDataForm {
    private _android;
    private _layoutManager;
    private _loaded;
    private _validateResolve;
    createNativeView(): com.telerik.widget.dataform.visualization.RadDataForm;
    notifyValidated(propertyName: string, result: boolean): void;
    private _setupGroups();
    private _updateGroupLayout(propertyGroup, nativeGroup);
    private _updateSource();
    private _updateMetadata();
    private _syncPropertiesWithNativeProperties();
    private updateNativePropertyEditorDisplayMode(editor, value);
    private _updateNativeGroups();
    private getNativeGroup(name);
    private _updateEditorStyles();
    private _updateGroupStyles();
    private _createPropertyFromNative(nativeProperty);
    private _addValidationListener();
    private _addCommitListener();
    private _addIsExpandedChangedListener(group);
    private _applyGroupTitleStyle(nativeGroup, titleStyle);
    readonly editedObject: string;
    protected _onIsReadOnlyPropertyChanged(oldValue: boolean, newValue: boolean): void;
    protected _onCommitModePropertyChanged(oldValue: string, newValue: string): void;
    protected _onValidationModePropertyChanged(oldValue: string, newValue: string): void;
    private _updateIsReadOnly();
    private _updateCommitMode();
    private _updateValidationMode();
    reload(): void;
    validateAll(): Promise<Boolean>;
    private onValidateChangesEnded(value);
    validateAndCommitAll(): Promise<Boolean>;
    commitAll(): void;
    hasValidationErrors(): boolean;
    protected _onSourcePropertyChanged(oldValue: any, newValue: any): void;
    protected _onMetadataPropertyChanged(oldValue: any, newValue: any): void;
    private _updateNativeEditor(entityProperty);
    private _syncEditorsWithNativeEditors();
    static _makeAndroidColor(colorValue: string): number;
    static _makeTypeface(fontName: string, style: string): android.graphics.Typeface;
}
export declare class EntityProperty extends commonModule.EntityProperty {
    _shouldSkipEditorUpdate: boolean;
    private _android;
    readonly android: com.telerik.widget.dataform.engine.EntityProperty;
    readonly isValid: boolean;
    readonly value: any;
    readonly valueCandidate: any;
    constructor();
    _linkPropertyWithNative(value: com.telerik.widget.dataform.engine.EntityProperty): void;
    _createEditorFromNative(nativeEditor: any): void;
    protected onEditorChanged(oldValue: PropertyEditor, newValue: PropertyEditor): void;
    private _onEditorTypeChanged(data);
    private _onNativeSet();
    protected updateNativeEditor(value: commonModule.PropertyEditor): void;
    protected updateNativeValidators(value: Array<commonModule.PropertyValidator>): void;
    protected updateNativeValuesProvider(value: Array<any>): void;
    protected updateNativeImageResource(value: any): void;
    protected updateNativeDisplayName(value: string): void;
    protected updateNativeIndex(value: number): void;
    protected updateNativeConverter(value: commonModule.PropertyConverter): void;
    protected updateNativeColumnIndex(value: number): void;
    protected updateNativeHidden(value: boolean): void;
    protected updateNativeReadOnly(value: boolean): void;
    protected updateNativeRequired(value: boolean): void;
    protected updateNativeHintText(value: string): void;
}
export declare class PropertyEditor extends commonModule.PropertyEditor {
    _readOnly: boolean;
    _android: com.telerik.widget.dataform.visualization.core.EntityPropertyViewer;
    readonly android: com.telerik.widget.dataform.visualization.core.EntityPropertyViewer;
    private _editorClass;
    readonly editorClass: any;
    private _editorParams;
    readonly editorParams: any;
    protected onPropertyEditorStyleChanged(oldValue: commonModule.PropertyEditorStyle, newValue: commonModule.PropertyEditorStyle): void;
    protected onStylePropertyChanged(propertyName: String): void;
    protected onParamsChanged(oldValue: commonModule.PropertyEditorParams, newValue: commonModule.PropertyEditorParams): void;
    protected onParamsPropertyChanged(propertyName: String): void;
    protected onTypeChanged(oldValue: string, newValue: string): void;
    private _updateEditorClass();
    static _getNativeEditorType(nativeEditor: any): "Text" | "MultilineText" | "Email" | "Password" | "Phone" | "Decimal" | "Number" | "Switch" | "Stepper" | "Slider" | "SegmentedEditor" | "DatePicker" | "TimePicker" | "Picker" | "List" | "AutoCompleteInline" | "Label";
}
export declare class CustomPropertyEditor extends commonModule.CustomPropertyEditor {
    _readOnly: boolean;
    _android: com.telerik.widget.dataform.visualization.editors.DataFormCustomEditor;
    readonly android: com.telerik.widget.dataform.visualization.editors.DataFormCustomEditor;
    private _editorClass;
    readonly editorClass: any;
    private _editorParams;
    readonly editorParams: any;
    protected onPropertyEditorStyleChanged(oldValue: commonModule.PropertyEditorStyle, newValue: commonModule.PropertyEditorStyle): void;
    protected onStylePropertyChanged(propertyName: String): void;
    protected onParamsChanged(oldValue: commonModule.PropertyEditorParams, newValue: commonModule.PropertyEditorParams): void;
    protected onParamsPropertyChanged(propertyName: String): void;
    protected onTypeChanged(oldValue: string, newValue: string): void;
    createView(context: any): any;
    applyValueToEditor(value: any, view: any): void;
    value(view: any): any;
    notifyValueChanged(): void;
}
export declare class PropertyEditorHelper {
    static _linkEditorWithNative(editor: commonModule.PropertyEditor, value: com.telerik.widget.dataform.visualization.core.EntityPropertyViewer): void;
    static _onNativeSet(editor: commonModule.PropertyEditor): void;
    static _updateLabelTextColor(editor: any, labelTextColor: any): void;
    static _updateLabelFont(editor: any, labelFontName: any, labelFontStyle: any): void;
    static _updateLabelTextSize(editor: any, labelTextSize: any): void;
    static _updateLabelHorizontalOffset(editor: any, labelHorizontalOffset: any): void;
    static _updateLabelVerticalOffset(editor: any, labelVerticalOffset: any): void;
    static _updateEditorHorizontalOffset(editor: any, editorHorizontalOffset: any): void;
    static _updateEditorVerticalOffset(editor: any, editorVerticalOffset: any): void;
    static _updateEditorFillColor(editor: any, editorFillColor: any): void;
    static _updateEditorStroke(editor: any, editorStrokeColor: any, editorStrokeWidth: any, editorFillColor: any): void;
    static _updateLabelHidden(editor: any, labelHidden: any): void;
    static _updateLabelPosition(editor: any, labelPosition: any): void;
    static _updateLabelWidth(editor: any, labelWidth: any): void;
    static applyParams(editor: any): void;
    static applyStyle(editor: any): void;
    static applyStyleForProperty(editor: commonModule.PropertyEditor, propertyName: String): void;
    static isReadOnly(editor: any): boolean;
    static setReadOnly(editor: any, value: any): void;
}
export declare class PropertyValidator extends commonModule.PropertyValidator {
    private _android;
    readonly android: com.telerik.widget.dataform.engine.PropertyValidatorManual;
    constructor();
    validate(value: any, propertyName: string): boolean;
}
export declare class MinimumLengthValidator extends commonModule.MinimumLengthValidator {
    private _android;
    readonly android: com.telerik.widget.dataform.engine.MinimumLengthValidator;
    constructor();
    protected onLengthChanged(oldValue: number, newValue: number): void;
}
export declare class MaximumLengthValidator extends commonModule.MaximumLengthValidator {
    private _android;
    readonly android: com.telerik.widget.dataform.engine.MaximumLengthValidator;
    constructor();
    protected onLengthChanged(oldValue: number, newValue: number): void;
}
export declare class EmailValidator extends commonModule.EmailValidator {
    private _android;
    readonly android: com.telerik.widget.dataform.engine.MailValidator;
    constructor();
}
export declare class NonEmptyValidator extends commonModule.NonEmptyValidator {
    private _android;
    readonly android: com.telerik.widget.dataform.engine.NonEmptyValidator;
    constructor();
}
export declare class RangeValidator extends commonModule.RangeValidator {
    private _android;
    readonly android: com.telerik.widget.dataform.engine.RangeValidator;
    constructor();
    protected onMinimumChanged(oldValue: number, newValue: number): void;
    protected onMaximumChanged(oldValue: number, newValue: number): void;
}
export declare class PhoneValidator extends commonModule.PhoneValidator {
    private _android;
    readonly android: com.telerik.widget.dataform.engine.PhoneValidator;
    constructor();
}
export declare class RegExValidator extends commonModule.RegExValidator {
    private _android;
    readonly android: com.telerik.widget.dataform.engine.RegExValidator;
    constructor();
    protected onRegExChanged(oldValue: string, newValue: string): void;
}
export declare class IsTrueValidator extends commonModule.IsTrueValidator {
    private _android;
    readonly android: com.telerik.widget.dataform.engine.IsTrueValidator;
    constructor();
}
export declare class StringToDateConverter extends commonModule.StringToDateConverter {
    private _android;
    readonly android: com.telerik.widget.dataform.engine.StringToDateConverter;
    constructor();
}
export declare class StringToTimeConverter extends commonModule.StringToTimeConverter {
    private _android;
    readonly android: com.telerik.widget.dataform.engine.StringToTimeConverter;
    constructor();
}
