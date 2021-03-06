import * as viewModule from "tns-core-modules/ui/core/view";
import * as observableModule from "tns-core-modules/data/observable";
import * as stackLayoutModule from "tns-core-modules/ui/layouts/stack-layout";
import { Property, View, KeyedTemplate } from "tns-core-modules/ui/core/view";
export declare namespace ListViewViewTypes {
    let HeaderView: string;
    let ItemView: string;
    let FooterView: string;
    let GroupView: string;
    let LoadOnDemandView: string;
    let ItemSwipeView: string;
}
export declare namespace ListViewItemSnapMode {
    let Auto: string;
    let Start: string;
    let End: string;
    let Center: string;
}
export declare namespace ListViewScrollDirection {
    let Vertical: string;
    let Horizontal: string;
}
export declare namespace ListViewScrollPosition {
    let None: string;
    let Top: string;
    let CenteredVertically: string;
    let CenteredHorizontally: string;
    let Bottom: string;
    let Left: string;
    let Right: string;
}
export declare namespace ListViewItemAlignment {
    let Stretch: string;
    let Left: string;
    let Center: string;
    let Right: string;
}
export declare namespace ListViewReorderMode {
    let HoldAndDrag: string;
    let Drag: string;
}
export declare namespace ListViewItemAnimation {
    let Default: string;
    let Fade: string;
    let Scale: string;
    let Slide: string;
}
export declare namespace ListViewLoadOnDemandMode {
    let None: string;
    let Manual: string;
    let Auto: string;
}
export declare namespace ListViewSelectionBehavior {
    let None: string;
    let Press: string;
    let LongPress: string;
}
export declare class PullToRefreshStyle extends viewModule.ViewBase {
    indicatorColor: string;
    indicatorBackgroundColor: string;
    _owner: RadListView;
    static indicatorColorProperty: Property<PullToRefreshStyle, string>;
    static indicatorBackgroundColorProperty: Property<PullToRefreshStyle, string>;
    protected onIndicatorColorPropertyChanged(oldValue: string, newValue: string): void;
    protected onIndicatorBackgroundColorPropertyChanged(oldValue: string, newValue: string): void;
}
export declare class ReorderHandle extends stackLayoutModule.StackLayout {
    constructor();
}
export declare class ListViewScrollEventData implements observableModule.EventData {
    private _eventName;
    private _object;
    private _scrollOffset;
    constructor();
    object: any;
    eventName: string;
    scrollOffset: number;
}
export declare class ListViewEventData implements observableModule.EventData {
    private _eventName;
    private _object;
    private _index;
    private _groupIndex;
    private _data;
    private _returnValue;
    private _view;
    private _android;
    private _ios;
    constructor();
    android: any;
    ios: any;
    eventName: string;
    object: any;
    index: number;
    groupIndex: number;
    data: any;
    returnValue: any;
    view: viewModule.View;
}
export declare class SwipeActionsEventData extends ListViewEventData {
    private _swipeView;
    private _mainView;
    mainView: any;
    swipeView: any;
}
export declare class ListViewLayoutBase extends viewModule.ViewBase {
    scrollDirection: string;
    itemInsertAnimation: string;
    itemDeleteAnimation: string;
    itemWidth: number;
    itemHeight: number;
    readonly android: any;
    readonly ios: any;
    static scrollDirectionProperty: Property<ListViewLayoutBase, string>;
    private onScrollDirectionPropertyChanged(oldValue, newValue);
    protected onScrollDirectionChanged(oldValue: string, newValue: string): void;
    static itemInsertAnimationProperty: Property<ListViewLayoutBase, string>;
    private onItemInsertAnimationPropertyChanged(oldValue, newValue);
    protected onItemInsertAnimationChanged(oldValue: string, newValue: string): void;
    static itemDeleteAnimationProperty: Property<ListViewLayoutBase, string>;
    private onItemDeleteAnimationPropertyChanged(oldValue, newValue);
    protected onItemDeleteAnimationChanged(oldValue: string, newValue: string): void;
    static itemWidthProperty: Property<ListViewLayoutBase, number>;
    private onItemWidthPropertyChanged(oldValue, newValue);
    protected onItemWidthChanged(oldValue: number, newValue: number): void;
    static itemHeightProperty: Property<ListViewLayoutBase, number>;
    private onItemHeightPropertyChanged(oldValue, newValue);
    protected onItemHeightChanged(oldValue: number, newValue: number): void;
    _onOwnerUICreated(): void;
}
export declare class RadListView extends viewModule.View {
    static knownFunctions: string[];
    static scrolledEvent: string;
    static scrollDragEndedEvent: string;
    static scrollStartedEvent: string;
    static scrollEndedEvent: string;
    static itemSelectingEvent: string;
    static itemDeselectingEvent: string;
    static itemTapEvent: string;
    static itemHoldEvent: string;
    static itemSelectedEvent: string;
    static itemDeselectedEvent: string;
    static itemReorderStartingEvent: string;
    static itemReorderedEvent: string;
    static itemReorderStartedEvent: string;
    static itemSwipingEvent: string;
    static itemSwipeProgressChangedEvent: string;
    static itemSwipeProgressStartedEvent: string;
    static itemSwipeProgressEndedEvent: string;
    static loadMoreDataRequestedEvent: string;
    static pullToRefreshInitiatedEvent: string;
    static itemLoadingEvent: string;
    static dataPopulatedEvent: string;
    pullToRefreshStyle: PullToRefreshStyle;
    listViewLayout: ListViewLayoutBase;
    headerItemTemplate: string;
    _headerItemTemplateInternal: string;
    _hasGroupingFunctionChanged: boolean;
    footerItemTemplate: string;
    itemTemplate: string;
    groupTemplate: string;
    itemTemplates: string | Array<KeyedTemplate>;
    itemTemplateSelector: ((item: any, index: number, items: any) => string) | string;
    itemSwipeTemplate: string;
    multipleSelection: boolean;
    itemReorder: boolean;
    itemSwipe: boolean;
    swipeActions: boolean;
    pullToRefresh: boolean;
    loadOnDemandMode: string;
    loadOnDemandBufferSize: number;
    selectionBehavior: string;
    items: any;
    scrollPosition: string;
    reorderMode: string;
    loadOnDemandItemTemplate: string;
    enableCollapsibleGroups: boolean;
    groupingFunction: (item: any) => any;
    filteringFunction: (item: any) => boolean;
    sortingFunction: (item: any, otherItem: any) => number;
    readonly _defaultGroupTemplate: string;
    _defaultTemplate: KeyedTemplate;
    _itemTemplatesInternal: viewModule.KeyedTemplate[];
    protected _dataUpdatesSuspended: boolean;
    private _itemViewLoader;
    private _itemTemplateSelectorBindable;
    itemViewLoader: (viewType) => viewModule.View;
    readonly isDataOperationsEnabled: boolean;
    static groupingFunctionProperty: Property<RadListView, (item: any) => any>;
    static filteringFunctionProperty: Property<RadListView, (item: any) => boolean>;
    static sortingFunctionProperty: Property<RadListView, (item: any, otherItem: any) => number>;
    static enableCollapsibleGroupsProperty: Property<RadListView, boolean>;
    static pullToRefreshStyleProperty: Property<RadListView, PullToRefreshStyle>;
    static headerItemTemplateProperty: Property<RadListView, string>;
    static footerItemTemplateProperty: Property<RadListView, string>;
    static reorderModeProperty: Property<RadListView, string>;
    static listViewLayoutProperty: Property<RadListView, ListViewLayoutBase>;
    static loadOnDemandItemTemplateProperty: Property<RadListView, string>;
    static itemTemplateSelectorProperty: Property<RadListView, string | ((item: any, index: number, items: any) => string)>;
    static itemTemplatesProperty: Property<RadListView, string | viewModule.KeyedTemplate[]>;
    static itemTemplateProperty: Property<RadListView, string>;
    static itemSwipeTemplateProperty: Property<RadListView, string>;
    static groupTemplateProperty: Property<RadListView, string>;
    static multipleSelectionProperty: Property<RadListView, boolean>;
    static itemReorderProperty: Property<RadListView, boolean>;
    static itemSwipeProperty: Property<RadListView, boolean>;
    static swipeActionsProperty: Property<RadListView, boolean>;
    static pullToRefreshProperty: Property<RadListView, boolean>;
    static loadOnDemandModeProperty: Property<RadListView, string>;
    static loadOnDemandBufferSizeProperty: Property<RadListView, number>;
    static selectionBehaviorProperty: Property<RadListView, string>;
    static itemsProperty: Property<RadListView, any>;
    static scrollPositionProperty: Property<RadListView, string>;
    _reorderItemInSource(oldPosition: number, newPosition: number): void;
    suspendUpdates(): void;
    resumeUpdates(refresh: boolean): void;
    updatesSuspended(): boolean;
    getItemAtIndex(index: any): any;
    selectItemAt(index: number): void;
    deselectItemAt(index: number): void;
    selectAll(): void;
    deselectAll(): void;
    isItemSelected(item: any): boolean;
    getSelectedItems(): any[];
    getViewForItem(item: any): viewModule.View;
    protected resolveTemplateView(template: string): View;
    getViewForViewType(viewType: any, templateKey?: string): View;
    private onGroupingFunctionPropertyChanged(oldValue, newValue);
    private onFilteringFunctionPropertyChanged(oldValue, newValue);
    private onSortingFunctionPropertyChanged(oldValue, newValue);
    private onEnableCollapsibleGroupsPropertyChanged(oldValue, newValue);
    private _getDefaultItemContent();
    private getTemplateFromSelector(templateKey);
    private onPullToRefreshStylePropertyChanged(oldValue, newValue);
    private onHeaderItemTemplatePropertyChanged(oldValue, newValue);
    private onFooterItemTemplatePropertyChanged(oldValue, newValue);
    private onLoadOnDemandItemTemplatePropertyChanged(oldValue, newValue);
    private onListViewReorderModePropertyChanged(oldValue, newValue);
    private onLayoutPropertyChanged(oldValue, newValue);
    private onItemTemplateSelectorPropertyChanged(oldValue, newValue);
    private onItemTemplatesPropertyChanged(oldValue, newValue);
    private onItemTemplatePropertyChanged(oldValue, newValue);
    private onGroupTemplatePropertyChanged(oldValue, newValue);
    private onItemSwipeTemplatePropertyChanged(oldValue, newValue);
    private onMultipleSelectionPropertyChanged(oldValue, newValue);
    private onItemReorderPropertyChanged(oldValue, newValue);
    private onItemSwipePropertyChanged(oldValue, newValue);
    private onSwipeActionsPropertyChanged(oldValue, newValue);
    private onPullToRefreshPropertyChanged(oldValue, newValue);
    private onLoadOnDemandModePropertyChanged(oldValue, newValue);
    private onLoadOnDemandBufferSizePropertyChanged(oldValue, newValue);
    private onSelectionBehaviorPropertyChanged(oldValue, newValue);
    private onItemsPropertyChanged(oldValue, newValue);
    private onScrollPositionPropertyChanged(oldValue, newValue);
    protected onItemViewLoaderChanged(): void;
    protected onGroupingFunctionChanged(oldValue: (item: any) => any, newValue: (item: any) => any): void;
    protected onFilteringFunctionChanged(oldValue: (item: any) => boolean, newValue: (item: any) => boolean): void;
    protected onSortingFunctionChanged(oldValue: (item: any, otherItem: any) => number, newValue: (item: any, otherItem: any) => number): void;
    protected onEnableCollapsibleGroupsChanged(oldValue: boolean, newValue: boolean): void;
    protected onPullToRefreshStyleChanged(oldValue: PullToRefreshStyle, newValue: PullToRefreshStyle): void;
    protected onHeaderItemTemplateChanged(oldValue: string, newValue: string): void;
    protected onFooterItemTemplateChanged(oldValue: string, newValue: string): void;
    protected onLoadOnDemandItemTemplateChanged(oldValue: string, newValue: string): void;
    protected onReorderModeChanged(oldValue: string, newValue: string): void;
    protected onListViewLayoutChanged(oldValue: ListViewLayoutBase, newValue: ListViewLayoutBase): void;
    protected onItemTemplateSelectorChanged(oldValue: string | ((item: any, index: number, items: any) => string), newValue: string | ((item: any, index: number, items: any) => string)): void;
    protected onItemTemplatesChanged(oldValue: string | Array<KeyedTemplate>, newValue: string | Array<KeyedTemplate>): void;
    protected onItemTemplateChanged(oldValue: string, newValue: string): void;
    protected onGroupTemplateChanged(oldValue: string, newValue: string): void;
    protected onItemSwipeTemplateChanged(oldValue: string, newValue: string): void;
    protected onMultipleSelectionChanged(oldValue: boolean, newValue: boolean): void;
    protected onItemReorderChanged(oldValue: boolean, newValue: boolean): void;
    protected onItemSwipeChanged(oldValue: boolean, newValue: boolean): void;
    protected onSwipeActionsChanged(oldValue: boolean, newValue: boolean): void;
    protected onPullToRefreshChanged(oldValue: boolean, newValue: boolean): void;
    protected onLoadOnDemandModeChanged(oldValue: string, newValue: string): void;
    protected onLoadOnDemandBufferSizeChanged(oldValue: number, newValue: number): void;
    protected onSelectionBehaviorChanged(oldValue: string, newValue: string): void;
    private onSourceCollectionChangedInternal(args);
    private onItemsChangedInternal(oldValue, newValue);
    protected onItemsChanged(oldValue: any, newValue: any): void;
    protected onScrollPositionChanged(oldValue: string, newValue: string): void;
    protected onSourceCollectionChanged(data: any): void;
    refresh(): void;
    getScrollOffset(): number;
    scrollToIndex(index: number, animate?: boolean, snapMode?: string): void;
    scrollWithAmount(amount: number, animate: boolean): void;
    notifyLoadOnDemandFinished(): void;
    notifyPullToRefreshFinished(): void;
    notifySwipeToExecuteFinished(): void;
}
