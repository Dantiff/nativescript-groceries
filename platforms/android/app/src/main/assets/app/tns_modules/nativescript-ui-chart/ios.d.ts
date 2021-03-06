
declare function TKAreaPathFillCreate(path: any, baseline: TKLineSegment): TKChartArea;

interface TKBezierCubicCurve {
	start: CGPoint;
	controlPoint1: CGPoint;
	controlPoint2: CGPoint;
	end: CGPoint;
}
declare var TKBezierCubicCurve: interop.StructType<TKBezierCubicCurve>;

declare class TKChart extends TKView {

	static alloc(): TKChart; // inherited from NSObject

	static appearance(): TKChart; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKChart; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKChart; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKChart; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKChart; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKChart; // inherited from UIAppearance

	static new(): TKChart; // inherited from NSObject

	allowAnimations: boolean;

	allowPanDeceleration: boolean;

	allowTrackball: boolean;

	animationDuration: number;

	readonly annotations: NSArray<any>;

	readonly axes: NSArray<any>;

	dataPointSelectionMode: TKChartSelectionMode;

	dataSource: TKChartDataSource;

	delegate: TKChartDelegate;

	readonly gridStyle: TKChartGridStyle;

	handleDoubleTap: boolean;

	insets: UIEdgeInsets;

	readonly legend: TKChartLegendView;

	readonly plotView: TKChartPlotView;

	plotViewInsets: UIEdgeInsets;

	readonly selectedPoints: NSArray<TKChartSelectionInfo>;

	readonly selectedSeries: NSArray<TKChartSeries>;

	selectionMode: TKChartSelectionMode;

	readonly series: NSArray<TKChartSeries>;

	seriesSelectionMode: TKChartSelectionMode;

	theme: TKTheme;

	readonly title: TKChartTitleView;

	readonly trackball: TKChartTrackball;

	xAxis: TKChartAxis;

	yAxis: TKChartAxis;

	zoomMode: TKChartZoomMode;

	addAnnotation(annotation: TKChartAnnotation): void;

	addAxis(axis: TKChartAxis): void;

	addSeries(series: TKChartSeries): void;

	animate(): void;

	beginUpdates(): void;

	dequeueReusableSeriesWithIdentifier(identifier: string): any;

	deselect(info: TKChartSelectionInfo): void;

	endUpdates(): void;

	hitTestForPoint(point: CGPoint): TKChartSelectionInfo;

	paletteItemForPointInSeries(index: number, series: TKChartSeries): TKChartPaletteItem;

	paletteItemForSeriesAtIndex(series: TKChartSeries, index: number): TKChartPaletteItem;

	reloadData(): void;

	removeAllAnnotations(): void;

	removeAllData(): void;

	removeAnnotation(annotation: TKChartAnnotation): void;

	removeAxis(axis: TKChartAxis): boolean;

	removeSeries(series: TKChartSeries): void;

	select(info: TKChartSelectionInfo): void;

	update(): void;

	updateAnnotations(): void;

	visualPointForSeriesDataPointIndex(series: TKChartSeries, dataPointIndex: number): TKChartVisualPoint;

	visualPointsForSeries(series: TKChartSeries): NSArray<TKChartVisualPoint>;
}

declare class TKChartAbsoluteVolumeOscillator extends TKChartMACDIndicator {

	static alloc(): TKChartAbsoluteVolumeOscillator; // inherited from NSObject

	static new(): TKChartAbsoluteVolumeOscillator; // inherited from NSObject
}

declare class TKChartAccumulationDistributionLine extends TKChartFinancialIndicator {

	static alloc(): TKChartAccumulationDistributionLine; // inherited from NSObject

	static new(): TKChartAccumulationDistributionLine; // inherited from NSObject
}

declare class TKChartAdaptiveMovingAverageIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartAdaptiveMovingAverageIndicator; // inherited from NSObject

	static new(): TKChartAdaptiveMovingAverageIndicator; // inherited from NSObject

	fastPeriod: number;

	period: number;

	slowPerod: number;
}

declare class TKChartAnnotation extends NSObject {

	static alloc(): TKChartAnnotation; // inherited from NSObject

	static new(): TKChartAnnotation; // inherited from NSObject

	hidden: boolean;

	zPosition: TKChartAnnotationZPosition;

	annotationWasAddedToChartWithLayer(chart: TKChart, layer: CALayer): void;

	annotationWillBeRemovedFromChart(chart: TKChart): void;

	drawInContext(context: any): void;

	layoutInRectForChartInLayer(bounds: CGRect, chart: TKChart, layer: CALayer): void;

	locationOfValueWithAxisInBounds(value: any, axis: TKChartAxis, bounds: CGRect): number;
}

declare class TKChartAnnotationStyle {
}

declare const enum TKChartAnnotationZPosition {

	BelowSeries = 0,

	AboveSeries = 1
}

interface TKChartArea {
	count: number;
	paths: interop.Pointer | interop.Reference<TKChartAreaPath>;
}
declare var TKChartArea: interop.StructType<TKChartArea>;

interface TKChartAreaPath {
	type: TKChartAreaPathType;
	start: CGPoint;
	path: any;
}
declare var TKChartAreaPath: interop.StructType<TKChartAreaPath>;

declare function TKChartAreaPathCreate(type: TKChartAreaPathType): TKChartAreaPath;

declare function TKChartAreaPathRelease(path: TKChartAreaPath): void;

declare const enum TKChartAreaPathType {

	BelowBaseline = 0,

	AboveBaseline = 1
}

declare function TKChartAreaRefRelease(areas: interop.Pointer | interop.Reference<TKChartArea>, count: number): void;

declare function TKChartAreaRelease(area: TKChartArea): void;

declare class TKChartAreaSeries extends TKChartLineSeries {

	static alloc(): TKChartAreaSeries; // inherited from NSObject

	static new(): TKChartAreaSeries; // inherited from NSObject
}

declare class TKChartAverageTrueRangeIndicator extends TKChartTrueRangeIndicator {

	static alloc(): TKChartAverageTrueRangeIndicator; // inherited from NSObject

	static new(): TKChartAverageTrueRangeIndicator; // inherited from NSObject

	period: number;
}

declare class TKChartAxis extends NSObject {

	static alloc(): TKChartAxis; // inherited from NSObject

	static new(): TKChartAxis; // inherited from NSObject

	allowPan: boolean;

	allowZoom: boolean;

	attributedTitle: NSAttributedString;

	customLabels: NSDictionary<any, any>;

	hidden: boolean;

	readonly isVertical: boolean;

	labelFormat: string;

	labelFormatter: NSFormatter;

	readonly majorTickCount: number;

	normalizedPan: number;

	pan: number;

	readonly plotMode: TKChartAxisPlotMode;

	position: TKChartAxisPosition;

	range: TKRange;

	style: TKChartAxisStyle;

	title: string;

	readonly visibleRange: TKRange;

	zoom: number;

	zoomRange: TKRange;

	constructor(o: { minimum: any; andMaximum: any; });

	constructor(o: { minimum: any; andMaximum: any; position: TKChartAxisPosition; });

	constructor(o: { range: TKRange; });

	formatValue(value: any): string;

	initWithMinimumAndMaximum(minimum: any, maximum: any): this;

	initWithMinimumAndMaximumPosition(minimum: any, maximum: any, position: TKChartAxisPosition): this;

	initWithRange(range: TKRange): this;

	numericValue(value: any): number;

	panToDataPoint(dataPoint: TKChartData): void;

	renderForChart(chart: TKChart): TKChartAxisRender;

	tickValue(index: number): any;
}

declare const enum TKChartAxisClippingMode {

	Visible = 0,

	Hidden = 1
}

declare const enum TKChartAxisLabelAlignment {

	Left = 1,

	Right = 2,

	Top = 4,

	Bottom = 8,

	HorizontalCenter = 16,

	VerticalCenter = 32
}

declare const enum TKChartAxisLabelFitMode {

	None = 0,

	Multiline = 1,

	Rotate = 2
}

declare class TKChartAxisLabelStyle extends TKChartLabelStyle {

	clipAxisLabels: boolean;

	firstLabelTextAlignment: TKChartAxisLabelAlignment;

	firstLabelTextOffset: UIOffset;

	fitMode: TKChartAxisLabelFitMode;

	lastLabelTextAlignment: TKChartAxisLabelAlignment;

	lastLabelTextOffset: UIOffset;

	maxLabelClippingMode: TKChartAxisClippingMode;

	minLabelClippingMode: TKChartAxisClippingMode;

	rotationAngle: number;

	textAlignment: TKChartAxisLabelAlignment;

	textOffset: UIOffset;
}

declare class TKChartAxisMajorTickStyle extends TKChartAxisTickStyle {

	maxTickClippingMode: TKChartAxisClippingMode;

	minTickClippingMode: TKChartAxisClippingMode;
}

declare const enum TKChartAxisPlotMode {

	OnTicks = 0,

	BetweenTicks = 1
}

declare const enum TKChartAxisPosition {

	Left = 0,

	Right = 1,

	Top = 2,

	Bottom = 3
}

declare class TKChartAxisRender extends TKChartRender {

	static alloc(): TKChartAxisRender; // inherited from NSObject

	static layer(): TKChartAxisRender; // inherited from CALayer

	static new(): TKChartAxisRender; // inherited from NSObject

	readonly axis: TKChartAxis;

	readonly isVertical: boolean;

	constructor(o: { axis: TKChartAxis; chart: TKChart; });

	boundsRect(): CGRect;

	initWithAxisChart(axis: TKChartAxis, chart: TKChart): this;

	sizeThatFits(size: CGSize): CGSize;
}

declare class TKChartAxisStyle {

	backgroundFill: TKFill;

	readonly labelStyle: TKChartAxisLabelStyle;

	lineHidden: boolean;

	lineLocation: number;

	lineStroke: TKStroke;

	readonly majorTickStyle: TKChartAxisMajorTickStyle;

	readonly minorTickStyle: TKChartAxisTickStyle;

	readonly titleStyle: TKChartAxisTitleStyle;
}

declare class TKChartAxisTickStyle {

	ticksFill: TKFill;

	ticksHidden: boolean;

	ticksLength: number;

	ticksOffset: number;

	ticksStroke: TKStroke;

	ticksWidth: number;
}

declare const enum TKChartAxisTitleAlignment {

	Center = 0,

	LeftOrTop = 1,

	RightOrBottom = 2
}

declare class TKChartAxisTitleStyle extends TKChartLabelStyle {

	alignment: TKChartAxisTitleAlignment;

	rotationAngle: number;

	textOffset: number;
}

declare class TKChartBalloonAnnotation extends TKChartPointAnnotation {

	static alloc(): TKChartBalloonAnnotation; // inherited from NSObject

	static new(): TKChartBalloonAnnotation; // inherited from NSObject

	attributedText: NSAttributedString;

	size: CGSize;

	readonly style: TKChartBalloonAnnotationStyle;

	text: string;

	view: UIView;

	constructor(o: { text: string; });

	constructor(o: { text: string; point: TKChartData; forSeries: TKChartSeries; });

	constructor(o: { text: string; point: TKChartData; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	constructor(o: { text: string; x: any; y: any; forSeries: TKChartSeries; });

	constructor(o: { text: string; x: any; y: any; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	initWithText(text: string): this;

	initWithTextPointForSeries(text: string, point: TKChartData, series: TKChartSeries): this;

	initWithTextPointForXAxisForYAxis(text: string, point: TKChartData, xAxis: TKChartAxis, yAxis: TKChartAxis): this;

	initWithTextXYForSeries(text: string, xValue: any, yValue: any, series: TKChartSeries): this;

	initWithTextXYForXAxisForYAxis(text: string, xValue: any, yValue: any, xAxis: TKChartAxis, yAxis: TKChartAxis): this;
}

declare class TKChartBalloonAnnotationStyle extends TKChartAnnotationStyle {

	arrowSize: CGSize;

	cornerRadius: number;

	distanceFromPoint: number;

	fill: TKFill;

	font: UIFont;

	horizontalAlign: TKChartBalloonHorizontalAlignment;

	insets: UIEdgeInsets;

	stroke: TKStroke;

	textAlignment: NSTextAlignment;

	textColor: UIColor;

	textOrientation: TKChartBalloonAnnotationTextOrientation;

	verticalAlign: TKChartBalloonVerticalAlignment;
}

declare const enum TKChartBalloonAnnotationTextOrientation {

	Vertical = 0,

	Horizontal = 1
}

declare const enum TKChartBalloonHorizontalAlignment {

	Center = 0,

	Left = 1,

	Right = 2
}

declare const enum TKChartBalloonVerticalAlignment {

	Center = 0,

	Top = 1,

	Bottom = 2
}

declare class TKChartBandAnnotation extends TKChartAnnotation {

	static alloc(): TKChartBandAnnotation; // inherited from NSObject

	static new(): TKChartBandAnnotation; // inherited from NSObject

	axis: TKChartAxis;

	range: TKRange;

	readonly style: TKChartBandAnnotationStyle;

	constructor(o: { range: TKRange; forAxis: TKChartAxis; });

	constructor(o: { range: TKRange; forAxis: TKChartAxis; withFill: TKFill; withStroke: TKStroke; });

	initWithRangeForAxis(aRange: TKRange, anAxis: TKChartAxis): this;

	initWithRangeForAxisWithFillWithStroke(aRange: TKRange, anAxis: TKChartAxis, fill: TKFill, stroke: TKStroke): this;
}

declare class TKChartBandAnnotationStyle extends TKChartGridLineAnnotationStyle {

	fill: TKFill;
}

declare class TKChartBandIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartBandIndicator; // inherited from NSObject

	static new(): TKChartBandIndicator; // inherited from NSObject
}

declare class TKChartBandVisualPoint extends TKChartVisualPoint {

	static alloc(): TKChartBandVisualPoint; // inherited from NSObject

	static new(): TKChartBandVisualPoint; // inherited from NSObject

	signalY: number;

	constructor(o: { point: CGPoint; signalY: number; });

	initWithPointSignalY(point: CGPoint, signalY: number): this;
}

declare class TKChartBarSeries extends TKChartSeries {

	static alloc(): TKChartBarSeries; // inherited from NSObject

	static new(): TKChartBarSeries; // inherited from NSObject

	allowClustering: boolean;

	gapLength: number;

	maxBarHeight: number;

	minBarHeight: number;
}

declare class TKChartBollingerBandIndicator extends TKChartBandIndicator {

	static alloc(): TKChartBollingerBandIndicator; // inherited from NSObject

	static new(): TKChartBollingerBandIndicator; // inherited from NSObject

	period: number;

	width: number;
}

declare class TKChartBubbleDataPoint extends NSObject implements TKChartData {

	static alloc(): TKChartBubbleDataPoint; // inherited from NSObject

	static dataPointWithXYArea(xValue: any, yValue: any, area: number): TKChartBubbleDataPoint;

	static new(): TKChartBubbleDataPoint; // inherited from NSObject

	area: number;

	dataXValue: any;

	dataYValue: any;

	readonly close: number; // inherited from TKChartData

	readonly dataName: string; // inherited from TKChartData

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly high: number; // inherited from TKChartData

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly low: number; // inherited from TKChartData

	readonly open: number; // inherited from TKChartData

	readonly signalYValue: any; // inherited from TKChartData

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly volume: number; // inherited from TKChartData

	readonly  // inherited from NSObjectProtocol

	constructor(o: { x: any; y: any; area: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	generateStringRepresentationForXAxisYAxis(xAxis: TKChartAxis, yAxis: TKChartAxis): string;

	initWithXYArea(xValue: any, yValue: any, area: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKChartBubbleSeries extends TKChartScatterSeries {

	static alloc(): TKChartBubbleSeries; // inherited from NSObject

	static new(): TKChartBubbleSeries; // inherited from NSObject

	biggestBubbleDiameterForAutoscale: number;

	scale: number;
}

declare class TKChartBubbleVisualPoint extends TKChartVisualPoint {

	static alloc(): TKChartBubbleVisualPoint; // inherited from NSObject

	static new(): TKChartBubbleVisualPoint; // inherited from NSObject

	diameter: number;
}

declare class TKChartCandlestickBar extends TKChartOhlcBar {

	static alloc(): TKChartCandlestickBar; // inherited from NSObject

	static new(): TKChartCandlestickBar; // inherited from NSObject
}

declare class TKChartCandlestickSeries extends TKChartOhlcSeries {

	static alloc(): TKChartCandlestickSeries; // inherited from NSObject

	static new(): TKChartCandlestickSeries; // inherited from NSObject
}

declare class TKChartCategory extends NSObject {

	static alloc(): TKChartCategory; // inherited from NSObject

	static categoryWithDescription(description: string): TKChartCategory;

	static new(): TKChartCategory; // inherited from NSObject

	constructor(o: { description: string; });

	initWithDescription(description: string): this;
}

declare class TKChartCategoryAxis extends TKChartAxis {

	static alloc(): TKChartCategoryAxis; // inherited from NSObject

	static new(): TKChartCategoryAxis; // inherited from NSObject

	baseline: number;

	readonly categories: NSArray<any>;

	majorTickInterval: number;

	minorTickInterval: number;

	offset: number;

	constructor(o: { categories: NSArray<any>; });

	constructor(o: { categories: NSArray<any>; andRange: TKRange; });

	addCategoriesFromArray(categories: NSArray<any>): void;

	addCategory(category: any): void;

	initWithCategories(categories: NSArray<any>): this;

	initWithCategoriesAndRange(categories: NSArray<any>, range: TKRange): this;

	removeAllCategories(): void;

	removeCategoriesInArray(categories: NSArray<any>): void;

	removeCategory(category: any): void;

	setPlotMode(plotMode: TKChartAxisPlotMode): void;
}

declare class TKChartChaikinOscillator extends TKChartFinancialIndicator {

	static alloc(): TKChartChaikinOscillator; // inherited from NSObject

	static new(): TKChartChaikinOscillator; // inherited from NSObject

	longPeriod: number;

	shortPeriod: number;
}

declare class TKChartColumnSeries extends TKChartSeries {

	static alloc(): TKChartColumnSeries; // inherited from NSObject

	static new(): TKChartColumnSeries; // inherited from NSObject

	allowClustering: boolean;

	gapLength: number;

	maxColumnWidth: number;

	minColumnWidth: number;
}

declare class TKChartCommodityChannelIndex extends TKChartFinancialIndicator {

	static alloc(): TKChartCommodityChannelIndex; // inherited from NSObject

	static new(): TKChartCommodityChannelIndex; // inherited from NSObject

	period: number;
}

declare class TKChartCrossLineAnnotation extends TKChartPointAnnotation {

	static alloc(): TKChartCrossLineAnnotation; // inherited from NSObject

	static new(): TKChartCrossLineAnnotation; // inherited from NSObject

	readonly style: TKChartCrossLineAnnotationStyle;
}

declare const enum TKChartCrossLineAnnotationOrientation {

	Horizontal = 1,

	Vertical = 2
}

declare class TKChartCrossLineAnnotationStyle extends TKChartAnnotationStyle {

	horizontalLineStroke: TKStroke;

	insets: UIEdgeInsets;

	orientation: TKChartCrossLineAnnotationOrientation;

	pointShape: TKShape;

	pointShapeFill: TKFill;

	pointShapeInsets: UIEdgeInsets;

	pointShapeStroke: TKStroke;

	verticalLineStroke: TKStroke;
}

interface TKChartData extends NSObjectProtocol {

	area?: number;

	close?: number;

	dataName?: string;

	dataXValue: any;

	dataYValue: any;

	high?: number;

	low?: number;

	open?: number;

	signalYValue?: any;

	volume?: number;

	generateStringRepresentationForXAxisYAxis?(xAxis: TKChartAxis, yAxis: TKChartAxis): string;
}
declare var TKChartData: {

	prototype: TKChartData;
};

declare class TKChartDataPoint extends NSObject implements TKChartData {

	static alloc(): TKChartDataPoint; // inherited from NSObject

	static dataPointWithXY(xValue: any, yValue: any): TKChartDataPoint;

	static dataPointWithXYName(xValue: any, yValue: any, name: string): TKChartDataPoint;

	static new(): TKChartDataPoint; // inherited from NSObject

	dataName: string;

	dataXValue: any;

	dataYValue: any;

	readonly area: number; // inherited from TKChartData

	readonly close: number; // inherited from TKChartData

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly high: number; // inherited from TKChartData

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly low: number; // inherited from TKChartData

	readonly open: number; // inherited from TKChartData

	readonly signalYValue: any; // inherited from TKChartData

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly volume: number; // inherited from TKChartData

	readonly  // inherited from NSObjectProtocol

	constructor(o: { name: string; value: any; });

	constructor(o: { x: any; y: any; });

	constructor(o: { x: any; y: any; name: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	generateStringRepresentationForXAxisYAxis(xAxis: TKChartAxis, yAxis: TKChartAxis): string;

	initWithNameValue(name: string, value: any): this;

	initWithXY(xValue: any, yValue: any): this;

	initWithXYName(xValue: any, yValue: any, name: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface TKChartDataSource extends NSObjectProtocol {

	chartDataPointAtIndexForSeriesAtIndex?(chart: TKChart, dataIndex: number, seriesIndex: number): TKChartData;

	chartDataPointsForSeriesAtIndex?(chart: TKChart, seriesIndex: number): NSArray<any>;

	chartNumberOfDataPointsForSeriesAtIndex?(chart: TKChart, seriesIndex: number): number;

	numberOfSeriesForChart(chart: TKChart): number;

	seriesForChartAtIndex(chart: TKChart, index: number): TKChartSeries;
}
declare var TKChartDataSource: {

	prototype: TKChartDataSource;
};

declare class TKChartDateTimeAxis extends TKChartAxis {

	static alloc(): TKChartDateTimeAxis; // inherited from NSObject

	static new(): TKChartDateTimeAxis; // inherited from NSObject

	baseline: Date;

	majorTickInterval: number;

	majorTickIntervalUnit: TKChartDateTimeAxisIntervalUnit;

	minorTickIntervalUnit: TKChartDateTimeAxisIntervalUnit;

	offset: Date;

	constructor(o: { minimumDate: Date; andMaximumDate: Date; });

	initWithMinimumDateAndMaximumDate(minDate: Date, maxDate: Date): this;

	setMajorTickCount(tickCount: number): void;

	setPlotMode(plotMode: TKChartAxisPlotMode): void;
}

declare const enum TKChartDateTimeAxisIntervalUnit {

	Seconds = 0,

	Minutes = 1,

	Hours = 2,

	Days = 3,

	Weeks = 4,

	Months = 5,

	Years = 6,

	Custom = 7
}

declare class TKChartDateTimeCategoryAxis extends TKChartAxis {

	static alloc(): TKChartDateTimeCategoryAxis; // inherited from NSObject

	static new(): TKChartDateTimeCategoryAxis; // inherited from NSObject

	baseline: Date;

	readonly categories: NSArray<any>;

	dateComponent: NSCalendarUnit;

	readonly majorTickInterval: number;

	minorTickInterval: number;

	offset: Date;

	constructor(o: { minimumDate: Date; andMaximumDate: Date; });

	initWithMinimumDateAndMaximumDate(minDate: Date, maxDate: Date): this;

	removeAllCategories(): void;

	setPlotMode(plotMode: TKChartAxisPlotMode): void;
}

interface TKChartDelegate extends NSObjectProtocol {

	chartAnimationForSeriesWithStateInRect?(chart: TKChart, series: TKChartSeries, state: TKChartSeriesRenderState, rect: CGRect): CAAnimation;

	chartAttributedTextForAxisValueAtIndex?(chart: TKChart, axis: TKChartAxis, value: any, index: number): NSAttributedString;

	chartDidDeselectPointInSeriesAtIndex?(chart: TKChart, point: TKChartData, series: TKChartSeries, index: number): void;

	chartDidDeselectSeries?(chart: TKChart, series: TKChartSeries): void;

	chartDidPan?(chart: TKChart): void;

	chartDidSelectPointInSeriesAtIndex?(chart: TKChart, point: TKChartData, series: TKChartSeries, index: number): void;

	chartDidSelectSeries?(chart: TKChart, series: TKChartSeries): void;

	chartDidTapOnLegendItem?(chart: TKChart, legendItem: TKChartLegendItem): void;

	chartDidZoom?(chart: TKChart): void;

	chartLabelForDataPointPropertyInSeriesAtIndex?(chart: TKChart, dataPoint: TKChartData, propertyName: string, series: TKChartSeries, dataIndex: number): TKChartPointLabel;

	chartLegendItemForSeriesAtIndex?(chart: TKChart, series: TKChartSeries, index: number): TKChartLegendItem;

	chartPaletteItemForPointInSeries?(chart: TKChart, index: number, series: TKChartSeries): TKChartPaletteItem;

	chartPaletteItemForSeriesAtIndex?(chart: TKChart, series: TKChartSeries, index: number): TKChartPaletteItem;

	chartPointLabelRenderForSeriesWithRender?(chart: TKChart, series: TKChartSeries, render: TKChartSeriesRender): TKChartPointLabelRender;

	chartShapeForSeriesAtIndex?(chart: TKChart, series: TKChartSeries, index: number): TKShape;

	chartTextForAxisValueAtIndex?(chart: TKChart, axis: TKChartAxis, value: any, index: number): string;

	chartTextForLabelAtPointPropertyInSeriesAtIndex?(chart: TKChart, dataPoint: TKChartData, propertyName: string, series: TKChartSeries, dataIndex: number): string;

	chartTrackballDidHideSelection?(chart: TKChart, selection: NSArray<any>): void;

	chartTrackballDidTrackSelection?(chart: TKChart, selection: NSArray<any>): void;

	chartTrackballLabelForDatapointInSeries?(chart: TKChart, point: TKChartData, series: TKChartSeries): string;

	chartUpdateLegendItemForSeriesAtIndex?(chart: TKChart, item: TKChartLegendItem, series: TKChartSeries, index: number): void;

	chartWillPan?(chart: TKChart): void;

	chartWillZoom?(chart: TKChart): void;
}
declare var TKChartDelegate: {

	prototype: TKChartDelegate;
};

declare class TKChartDetrendedPriceOscillator extends TKChartFinancialIndicator {

	static alloc(): TKChartDetrendedPriceOscillator; // inherited from NSObject

	static new(): TKChartDetrendedPriceOscillator; // inherited from NSObject

	period: number;
}

declare class TKChartDonutSeries extends TKChartPieSeries {

	static alloc(): TKChartDonutSeries; // inherited from NSObject

	static new(): TKChartDonutSeries; // inherited from NSObject

	innerRadius: number;
}

declare class TKChartEaseOfMovementIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartEaseOfMovementIndicator; // inherited from NSObject

	static new(): TKChartEaseOfMovementIndicator; // inherited from NSObject

	period: number;
}

declare class TKChartExponentialMovingAverageIndicator extends TKChartSimpleMovingAverageIndicator {

	static alloc(): TKChartExponentialMovingAverageIndicator; // inherited from NSObject

	static new(): TKChartExponentialMovingAverageIndicator; // inherited from NSObject
}

declare class TKChartFastStochasticIndicator extends TKChartSignalLineIndicator {

	static alloc(): TKChartFastStochasticIndicator; // inherited from NSObject

	static new(): TKChartFastStochasticIndicator; // inherited from NSObject

	period: number;

	signalPeriod: number;
}

declare class TKChartFinancialDataPoint extends NSObject implements TKChartData {

	static alloc(): TKChartFinancialDataPoint; // inherited from NSObject

	static dataPointWithXOpenHighLowClose(xValue: any, open: number, high: number, low: number, close: number): TKChartFinancialDataPoint;

	static dataPointWithXOpenHighLowCloseVolume(xValue: any, open: number, high: number, low: number, close: number, volume: number): TKChartFinancialDataPoint;

	static new(): TKChartFinancialDataPoint; // inherited from NSObject

	close: number;

	dataName: string;

	dataXValue: any;

	dataYValue: any;

	high: number;

	low: number;

	open: number;

	volume: number;

	readonly area: number; // inherited from TKChartData

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly signalYValue: any; // inherited from TKChartData

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { x: any; open: number; high: number; low: number; close: number; volume: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	generateStringRepresentationForXAxisYAxis(xAxis: TKChartAxis, yAxis: TKChartAxis): string;

	initWithXOpenHighLowCloseVolume(xValue: any, open: number, high: number, low: number, close: number, volume: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKChartFinancialIndicator extends TKChartSeries {

	static alloc(): TKChartFinancialIndicator; // inherited from NSObject

	static new(): TKChartFinancialIndicator; // inherited from NSObject

	marginForHitDetection: number;

	series: TKChartSeries;

	constructor(o: { series: TKChartSeries; });

	initWithSeries(series: TKChartSeries): this;
}

declare class TKChartForceIndexIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartForceIndexIndicator; // inherited from NSObject

	static new(): TKChartForceIndexIndicator; // inherited from NSObject

	period: number;
}

declare class TKChartFullStochasticIndicator extends TKChartSlowStochasticIndicator {

	static alloc(): TKChartFullStochasticIndicator; // inherited from NSObject

	static new(): TKChartFullStochasticIndicator; // inherited from NSObject

	smoothPeriod: number;
}

declare const enum TKChartGridDrawMode {

	HorizontalFirst = 0,

	VerticalFirst = 1
}

declare class TKChartGridLineAnnotation extends TKChartAnnotation {

	static alloc(): TKChartGridLineAnnotation; // inherited from NSObject

	static new(): TKChartGridLineAnnotation; // inherited from NSObject

	axis: TKChartAxis;

	readonly style: TKChartGridLineAnnotationStyle;

	value: any;

	constructor(o: { value: any; forAxis: TKChartAxis; });

	constructor(o: { value: any; forAxis: TKChartAxis; withStroke: TKStroke; });

	initWithValueForAxis(value: any, axis: TKChartAxis): this;

	initWithValueForAxisWithStroke(value: any, axis: TKChartAxis, stroke: TKStroke): this;
}

declare class TKChartGridLineAnnotationStyle extends TKChartAnnotationStyle {

	stroke: TKStroke;
}

declare class TKChartGridStyle extends TKStyleNode {

	static alloc(): TKChartGridStyle; // inherited from NSObject

	static new(): TKChartGridStyle; // inherited from NSObject

	backgroundFill: TKFill;

	drawOrder: TKChartGridDrawMode;

	horizontalAlternateFill: TKFill;

	horizontalFill: TKFill;

	horizontalLineAlternateStroke: TKStroke;

	horizontalLineStroke: TKStroke;

	horizontalLinesHidden: boolean;

	verticalAlternateFill: TKFill;

	verticalFill: TKFill;

	verticalLineAlternateStroke: TKStroke;

	verticalLineStroke: TKStroke;

	verticalLinesHidden: boolean;

	zPosition: TKChartGridZPosition;
}

declare const enum TKChartGridZPosition {

	BelowSeries = 0,

	AboveSeries = 1
}

declare class TKChartLabelStyle {

	font: UIFont;

	shadowColor: UIColor;

	shadowOffset: CGSize;

	textColor: UIColor;

	textHidden: boolean;
}

declare class TKChartLayerAnnotation extends TKChartPointAnnotation {

	static alloc(): TKChartLayerAnnotation; // inherited from NSObject

	static new(): TKChartLayerAnnotation; // inherited from NSObject

	layer: CALayer;

	constructor(o: { layer: CALayer; });

	constructor(o: { layer: CALayer; point: TKChartData; forSeries: TKChartSeries; });

	constructor(o: { layer: CALayer; point: TKChartData; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	constructor(o: { layer: CALayer; x: any; y: any; forSeries: TKChartSeries; });

	constructor(o: { layer: CALayer; x: any; y: any; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	initWithLayer(layer: CALayer): this;

	initWithLayerPointForSeries(layer: CALayer, point: TKChartData, series: TKChartSeries): this;

	initWithLayerPointForXAxisForYAxis(layer: CALayer, point: TKChartData, xAxis: TKChartAxis, yAxis: TKChartAxis): this;

	initWithLayerXYForSeries(layer: CALayer, xValue: any, yValue: any, series: TKChartSeries): this;

	initWithLayerXYForXAxisForYAxis(layer: CALayer, xValue: any, yValue: any, xAxis: TKChartAxis, yAxis: TKChartAxis): this;
}

declare class TKChartLegendContainer {

	readonly itemCount: number;

	preferredSize: CGSize;

	addItem(item: TKChartLegendItem): void;

	indexOfItem(item: TKChartLegendItem): number;

	itemAtIndex(index: number): TKChartLegendItem;

	removeAllItems(): void;
}

declare class TKChartLegendItem extends UIView {

	static alloc(): TKChartLegendItem; // inherited from NSObject

	static appearance(): TKChartLegendItem; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKChartLegendItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKChartLegendItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKChartLegendItem; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKChartLegendItem; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKChartLegendItem; // inherited from UIAppearance

	static new(): TKChartLegendItem; // inherited from NSObject

	icon: UIView;

	label: UILabel;

	selectionInfo: TKChartSelectionInfo;

	readonly stack: TKCoreStackLayout;

	style: TKChartLegendItemStyle;

	tap(tapRecognizer: UITapGestureRecognizer): void;

	update(): void;
}

declare class TKChartLegendItemStyle {

	fill: TKFill;

	iconSize: CGSize;

	readonly labelStyle: TKChartLabelStyle;

	stroke: TKStroke;
}

declare const enum TKChartLegendOffsetOrigin {

	TopLeft = 0,

	TopRight = 1,

	BottomLeft = 2,

	BottomRight = 3
}

declare const enum TKChartLegendPosition {

	Left = 0,

	Right = 1,

	Top = 2,

	Bottom = 3,

	Floating = 4
}

declare class TKChartLegendStyle {

	fill: TKFill;

	insets: UIEdgeInsets;

	offset: UIOffset;

	offsetOrigin: TKChartLegendOffsetOrigin;

	position: TKChartLegendPosition;

	stroke: TKStroke;
}

declare class TKChartLegendView extends TKView {

	static alloc(): TKChartLegendView; // inherited from NSObject

	static appearance(): TKChartLegendView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKChartLegendView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKChartLegendView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKChartLegendView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKChartLegendView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKChartLegendView; // inherited from UIAppearance

	static new(): TKChartLegendView; // inherited from NSObject

	allowSelection: boolean;

	chart: TKChart;

	readonly container: TKChartLegendContainer;

	showTitle: boolean;

	readonly style: TKChartLegendStyle;

	readonly titleLabel: UILabel;

	constructor(o: { chart: TKChart; });

	initWithChart(chart: TKChart): this;

	reloadItems(): void;

	update(): void;
}

declare class TKChartLineSeries extends TKChartSeries {

	static alloc(): TKChartLineSeries; // inherited from NSObject

	static new(): TKChartLineSeries; // inherited from NSObject

	displayNilValuesAsGaps: boolean;

	marginForHitDetection: number;
}

declare class TKChartLogarithmicAxis extends TKChartNumericAxis {

	static alloc(): TKChartLogarithmicAxis; // inherited from NSObject

	static new(): TKChartLogarithmicAxis; // inherited from NSObject

	exponentStep: number;

	logarithmBase: number;
}

declare class TKChartMACDIndicator extends TKChartSignalLineIndicator {

	static alloc(): TKChartMACDIndicator; // inherited from NSObject

	static new(): TKChartMACDIndicator; // inherited from NSObject

	longPeriod: number;

	shortPeriod: number;

	signalPeriod: number;
}

declare class TKChartMarketFacilitationIndex extends TKChartFinancialIndicator {

	static alloc(): TKChartMarketFacilitationIndex; // inherited from NSObject

	static new(): TKChartMarketFacilitationIndex; // inherited from NSObject

	gapLength: number;

	maxColumnWidth: number;

	minColumnWidth: number;

	range: number;
}

declare class TKChartMedianPriceIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartMedianPriceIndicator; // inherited from NSObject

	static new(): TKChartMedianPriceIndicator; // inherited from NSObject
}

declare class TKChartModifiedMovingAverageIndicator extends TKChartExponentialMovingAverageIndicator {

	static alloc(): TKChartModifiedMovingAverageIndicator; // inherited from NSObject

	static new(): TKChartModifiedMovingAverageIndicator; // inherited from NSObject
}

declare class TKChartMoneyFlowIndexIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartMoneyFlowIndexIndicator; // inherited from NSObject

	static new(): TKChartMoneyFlowIndexIndicator; // inherited from NSObject

	period: number;
}

declare class TKChartMovingAverageEnvelopesIndicator extends TKChartBandIndicator {

	static alloc(): TKChartMovingAverageEnvelopesIndicator; // inherited from NSObject

	static new(): TKChartMovingAverageEnvelopesIndicator; // inherited from NSObject

	envelopesPercentage: number;

	period: number;
}

declare class TKChartNegativeVolumeIndexIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartNegativeVolumeIndexIndicator; // inherited from NSObject

	static new(): TKChartNegativeVolumeIndexIndicator; // inherited from NSObject
}

declare class TKChartNumericAxis extends TKChartAxis {

	static alloc(): TKChartNumericAxis; // inherited from NSObject

	static new(): TKChartNumericAxis; // inherited from NSObject

	baseline: number;

	labelDisplayMode: TKChartNumericAxisLabelDisplayMode;

	majorTickInterval: number;

	minorTickInterval: number;

	offset: number;
}

declare const enum TKChartNumericAxisLabelDisplayMode {

	Value = 0,

	Percentage = 1
}

declare class TKChartOhlcBar extends TKChartVisualPoint {

	static alloc(): TKChartOhlcBar; // inherited from NSObject

	static new(): TKChartOhlcBar; // inherited from NSObject

	bodyWidth: number;

	closeValue: number;

	highValue: number;

	lowValue: number;

	openValue: number;

	constructor(o: { point: TKChartFinancialDataPoint; atIndex: number; series: TKChartSeries; render: TKChartSeriesRender; });

	drawInContext(ctx: any): void;

	initWithPointAtIndexSeriesRender(data: TKChartFinancialDataPoint, index: number, series: TKChartSeries, render: TKChartSeriesRender): this;
}

declare class TKChartOhlcSeries extends TKChartColumnSeries {

	static alloc(): TKChartOhlcSeries; // inherited from NSObject

	static new(): TKChartOhlcSeries; // inherited from NSObject
}

declare class TKChartOnBalanceVolumeIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartOnBalanceVolumeIndicator; // inherited from NSObject

	static new(): TKChartOnBalanceVolumeIndicator; // inherited from NSObject
}

declare class TKChartPalette extends NSObject {

	static alloc(): TKChartPalette; // inherited from NSObject

	static new(): TKChartPalette; // inherited from NSObject

	readonly items: NSArray<any>;

	readonly itemsCount: number;

	addPaletteItem(item: TKChartPaletteItem): void;

	addPaletteItems(items: NSArray<any>): void;

	clearPalette(): void;

	insertPaletteItemAtIndex(item: TKChartPaletteItem, index: number): void;

	paletteItemAtIndex(index: number): TKChartPaletteItem;

	replacePaletteItemAtIndex(item: TKChartPaletteItem, index: number): void;
}

declare class TKChartPaletteItem extends NSObject {

	static alloc(): TKChartPaletteItem; // inherited from NSObject

	static new(): TKChartPaletteItem; // inherited from NSObject

	static paletteItemWithDrawables(drawables: NSArray<any>): TKChartPaletteItem;

	static paletteItemWithFill(fill: TKFill): TKChartPaletteItem;

	static paletteItemWithStroke(stroke: TKStroke): TKChartPaletteItem;

	static paletteItemWithStrokeAndFill(stroke: TKStroke, fill: TKFill): TKChartPaletteItem;

	drawables: NSArray<any>;

	fill: TKFill;

	font: UIFont;

	stroke: TKStroke;

	textColor: UIColor;

	constructor(o: { drawables: NSArray<any>; });

	constructor(o: { fill: TKFill; });

	constructor(o: { stroke: TKStroke; });

	constructor(o: { stroke: TKStroke; andFill: TKFill; });

	initWithDrawables(drawables: NSArray<any>): this;

	initWithFill(fill: TKFill): this;

	initWithStroke(stroke: TKStroke): this;

	initWithStrokeAndFill(stroke: TKStroke, fill: TKFill): this;
}

declare class TKChartPercentagePriceOscillator extends TKChartMACDIndicator {

	static alloc(): TKChartPercentagePriceOscillator; // inherited from NSObject

	static new(): TKChartPercentagePriceOscillator; // inherited from NSObject
}

declare class TKChartPercentageVolumeOscillator extends TKChartMACDIndicator {

	static alloc(): TKChartPercentageVolumeOscillator; // inherited from NSObject

	static new(): TKChartPercentageVolumeOscillator; // inherited from NSObject
}

declare class TKChartPieSeries extends TKChartSeries {

	static alloc(): TKChartPieSeries; // inherited from NSObject

	static new(): TKChartPieSeries; // inherited from NSObject

	adjustSizeToFit: boolean;

	displayPercentage: boolean;

	endAngle: number;

	expandRadius: number;

	labelDisplayMode: TKChartPieSeriesLabelDisplayMode;

	outerRadius: number;

	radiusInset: number;

	rotationAngle: number;

	rotationDeceleration: number;

	rotationEnabled: boolean;

	selectionAngle: number;

	startAngle: number;
}

declare const enum TKChartPieSeriesLabelDisplayMode {

	Inside = 1,

	Outside = 2
}

declare class TKChartPieVisualPoint extends TKChartVisualPoint {

	static alloc(): TKChartPieVisualPoint; // inherited from NSObject

	static new(): TKChartPieVisualPoint; // inherited from NSObject

	distanceFromCenter: number;

	startAngle: number;
}

declare class TKChartPlotView extends TKView implements UIGestureRecognizerDelegate {

	static alloc(): TKChartPlotView; // inherited from NSObject

	static appearance(): TKChartPlotView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKChartPlotView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKChartPlotView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKChartPlotView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKChartPlotView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKChartPlotView; // inherited from UIAppearance

	static new(): TKChartPlotView; // inherited from NSObject

	readonly chart: TKChart;

	readonly doubleTapGestureRecognizer: UITapGestureRecognizer;

	handleTap: boolean;

	readonly longPressRecognizer: UILongPressGestureRecognizer;

	readonly panZoomRecognizer: UIGestureRecognizer;

	readonly rotateOneFingerRecognizer: UIGestureRecognizer;

	readonly rotateTwoFingerRecognizer: UIRotationGestureRecognizer;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { chart: TKChart; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	hitTestForPoint(point: CGPoint): TKChartSelectionInfo;

	initWithChart(chart: TKChart): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	renderForSeries(series: TKChartSeries): TKChartSeriesRender;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKChartPointAnnotation extends TKChartAnnotation {

	static alloc(): TKChartPointAnnotation; // inherited from NSObject

	static new(): TKChartPointAnnotation; // inherited from NSObject

	offset: UIOffset;

	position: TKChartData;

	series: TKChartSeries;

	xAxis: TKChartAxis;

	yAxis: TKChartAxis;

	constructor(o: { point: TKChartData; forSeries: TKChartSeries; });

	constructor(o: { point: TKChartData; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	constructor(o: { x: any; y: any; forSeries: TKChartSeries; });

	constructor(o: { x: any; y: any; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	initWithPointForSeries(point: TKChartData, series: TKChartSeries): this;

	initWithPointForXAxisForYAxis(point: TKChartData, xAxis: TKChartAxis, yAxis: TKChartAxis): this;

	initWithXYForSeries(xValue: any, yValue: any, series: TKChartSeries): this;

	initWithXYForXAxisForYAxis(xValue: any, yValue: any, xAxis: TKChartAxis, yAxis: TKChartAxis): this;

	locationInRectForChart(bounds: CGRect, chart: TKChart): CGPoint;
}

declare class TKChartPointLabel extends NSObject {

	static alloc(): TKChartPointLabel; // inherited from NSObject

	static new(): TKChartPointLabel; // inherited from NSObject

	readonly dataPoint: TKChartData;

	readonly series: TKChartSeries;

	readonly style: TKChartPointLabelStyle;

	text: string;

	constructor(o: { point: TKChartData; series: TKChartSeries; text: string; });

	drawInContextInRectForVisualPointColor(ctx: any, bounds: CGRect, visualPoint: TKChartVisualPoint, paletteTextColor: UIColor): void;

	initWithPointSeriesText(point: TKChartData, series: TKChartSeries, text: string): this;

	sizeThatFits(size: CGSize): CGSize;
}

declare const enum TKChartPointLabelClipMode {

	Hidden = 0,

	Visible = 1
}

declare const enum TKChartPointLabelLayoutMode {

	Manual = 0,

	Auto = 1
}

declare const enum TKChartPointLabelOrientation {

	Vertical = 0,

	Horizontal = 1
}

declare class TKChartPointLabelRender extends NSObject {

	static alloc(): TKChartPointLabelRender; // inherited from NSObject

	static new(): TKChartPointLabelRender; // inherited from NSObject

	readonly chartDelegate: TKChartDelegate;

	readonly render: TKChartSeriesRender;

	constructor(o: { render: TKChartSeriesRender; });

	initWithRender(render: TKChartSeriesRender): this;

	isPointInsideRect(point: CGPoint, rect: CGRect): boolean;

	labelForDataPointPropertyInSeriesAtIndex(dataPoint: TKChartData, propertyName: string, series: TKChartSeries, dataIndex: number): TKChartPointLabel;

	locationForDataPointForSeriesInRect(dataPoint: TKChartData, series: TKChartSeries, rect: CGRect): CGPoint;

	renderPointLabelsForSeriesInRectContext(series: TKChartSeries, bounds: CGRect, ctx: any): void;
}

declare class TKChartPointLabelStyle extends TKChartLabelStyle {

	blurRadius: number;

	clipMode: TKChartPointLabelClipMode;

	cornerRadius: number;

	fill: TKFill;

	formatter: NSFormatter;

	insets: UIEdgeInsets;

	labelOffset: UIOffset;

	layoutMode: TKChartPointLabelLayoutMode;

	stringFormat: string;

	stroke: TKStroke;

	textAlignment: NSTextAlignment;

	textOrientation: TKChartPointLabelOrientation;
}

declare class TKChartPositiveVolumeIndexIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartPositiveVolumeIndexIndicator; // inherited from NSObject

	static new(): TKChartPositiveVolumeIndexIndicator; // inherited from NSObject
}

declare class TKChartPriceVolumeTrendIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartPriceVolumeTrendIndicator; // inherited from NSObject

	static new(): TKChartPriceVolumeTrendIndicator; // inherited from NSObject
}

declare class TKChartRangeBarSeries extends TKChartBarSeries {

	static alloc(): TKChartRangeBarSeries; // inherited from NSObject

	static new(): TKChartRangeBarSeries; // inherited from NSObject
}

declare class TKChartRangeColumnSeries extends TKChartColumnSeries {

	static alloc(): TKChartRangeColumnSeries; // inherited from NSObject

	static new(): TKChartRangeColumnSeries; // inherited from NSObject
}

declare class TKChartRangeDataPoint extends NSObject implements TKChartData {

	static alloc(): TKChartRangeDataPoint; // inherited from NSObject

	static dataPointWithXLowHigh(xValue: any, lowValue: any, highValue: any): TKChartRangeDataPoint;

	static dataPointWithYLowHigh(yValue: any, lowValue: any, highValue: any): TKChartRangeDataPoint;

	static new(): TKChartRangeDataPoint; // inherited from NSObject

	dataXValue: any;

	dataYValue: any;

	high: any;

	low: any;

	readonly area: number; // inherited from TKChartData

	readonly close: number; // inherited from TKChartData

	readonly dataName: string; // inherited from TKChartData

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly open: number; // inherited from TKChartData

	readonly signalYValue: any; // inherited from TKChartData

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly volume: number; // inherited from TKChartData

	readonly  // inherited from NSObjectProtocol

	constructor(o: { x: any; low: any; high: any; });

	constructor(o: { y: any; low: any; high: any; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	generateStringRepresentationForXAxisYAxis(xAxis: TKChartAxis, yAxis: TKChartAxis): string;

	initWithXLowHigh(xValue: any, lowValue: any, highValue: any): this;

	initWithYLowHigh(yValue: any, lowValue: any, highValue: any): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKChartRangeVisualPoint extends TKChartVisualPoint {

	static alloc(): TKChartRangeVisualPoint; // inherited from NSObject

	static new(): TKChartRangeVisualPoint; // inherited from NSObject

	high: number;

	low: number;

	constructor(o: { point: CGPoint; low: number; high: number; });

	initWithPointLowHigh(point: CGPoint, low: number, high: number): this;
}

declare class TKChartRapidAdaptiveVarianceIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartRapidAdaptiveVarianceIndicator; // inherited from NSObject

	static new(): TKChartRapidAdaptiveVarianceIndicator; // inherited from NSObject

	longPeriod: number;

	shortPeriod: number;
}

declare class TKChartRateOfChangeIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartRateOfChangeIndicator; // inherited from NSObject

	static new(): TKChartRateOfChangeIndicator; // inherited from NSObject

	period: number;
}

declare class TKChartRelativeMomentumIndex extends TKChartFinancialIndicator {

	static alloc(): TKChartRelativeMomentumIndex; // inherited from NSObject

	static new(): TKChartRelativeMomentumIndex; // inherited from NSObject

	momentum: number;

	period: number;
}

declare class TKChartRelativeStrengthIndex extends TKChartFinancialIndicator {

	static alloc(): TKChartRelativeStrengthIndex; // inherited from NSObject

	static new(): TKChartRelativeStrengthIndex; // inherited from NSObject

	period: number;
}

declare class TKChartRender extends CALayer {

	static alloc(): TKChartRender; // inherited from NSObject

	static layer(): TKChartRender; // inherited from CALayer

	static new(): TKChartRender; // inherited from NSObject

	readonly chart: TKChart;

	constructor(o: { chart: TKChart; });

	initWithChart(chart: TKChart): this;

	setup(): void;

	update(): void;
}

declare class TKChartScatterSeries extends TKChartSeries {

	static alloc(): TKChartScatterSeries; // inherited from NSObject

	static new(): TKChartScatterSeries; // inherited from NSObject

	marginForHitDetection: number;
}

declare class TKChartSelectionInfo extends NSObject implements NSCopying {

	static alloc(): TKChartSelectionInfo; // inherited from NSObject

	static hitTestInfoWithSeriesDataPointIndex(series: TKChartSeries, dataPointIndex: number): TKChartSelectionInfo;

	static hitTestInfoWithSeriesDataPointIndexDistance(series: TKChartSeries, dataPointIndex: number, distance: number): TKChartSelectionInfo;

	static new(): TKChartSelectionInfo; // inherited from NSObject

	readonly dataPoint: TKChartData;

	readonly dataPointIndex: number;

	readonly distance: number;

	readonly location: CGPoint;

	readonly series: TKChartSeries;

	constructor(o: { series: TKChartSeries; dataPointIndex: number; });

	constructor(o: { series: TKChartSeries; dataPointIndex: number; distance: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithSeriesDataPointIndex(series: TKChartSeries, dataPointIndex: number): this;

	initWithSeriesDataPointIndexDistance(series: TKChartSeries, dataPointIndex: number, distance: number): this;
}

declare const enum TKChartSelectionMode {

	None = 0,

	Single = 1,

	Multiple = 2
}

declare class TKChartSeries extends NSObject {

	static alloc(): TKChartSeries; // inherited from NSObject

	static new(): TKChartSeries; // inherited from NSObject

	hidden: boolean;

	readonly index: number;

	readonly isSelected: boolean;

	readonly items: NSArray<any>;

	readonly reuseIdentifier: string;

	selection: TKChartSeriesSelection;

	selectionMode: TKChartSeriesSelectionMode;

	sortMode: TKChartSeriesSortMode;

	stackInfo: TKChartStackInfo;

	readonly style: TKChartSeriesStyle;

	tag: number;

	title: string;

	visibleInLegend: boolean;

	readonly visiblePoints: NSArray<any>;

	readonly visiblePointsInternal: NSArray<any>;

	xAxis: TKChartAxis;

	yAxis: TKChartAxis;

	constructor(o: { items: NSArray<any>; });

	constructor(o: { items: NSArray<any>; forKeys: NSDictionary<any, any>; });

	constructor(o: { items: NSArray<any>; forKeys: NSDictionary<any, any>; reuseIdentifier: string; });

	constructor(o: { items: NSArray<any>; reuseIdentifier: string; });

	constructor(o: { items: NSArray<any>; xValueKey: string; yValueKey: string; });

	dataPointAtIndex(dataIndex: number): TKChartData;

	initWithItems(items: NSArray<any>): this;

	initWithItemsForKeys(items: NSArray<any>, keys: NSDictionary<any, any>): this;

	initWithItemsForKeysReuseIdentifier(items: NSArray<any>, keys: NSDictionary<any, any>, reuseIdentifier: string): this;

	initWithItemsReuseIdentifier(items: NSArray<any>, reuseIdentifier: string): this;

	initWithItemsXValueKeyYValueKey(items: NSArray<any>, xValueKey: string, yValueKey: string): this;

	pointIsSelected(index: number): boolean;

	prepareForReuse(): void;

	renderForChart(chart: TKChart): TKChartSeriesRender;

	visiblePointsForAxis(axis: TKChartAxis): NSArray<any>;
}

declare class TKChartSeriesRender extends TKChartRender {

	static alloc(): TKChartSeriesRender; // inherited from NSObject

	static layer(): TKChartSeriesRender; // inherited from CALayer

	static locationOfValueForAxisInRect(numericValue: number, axis: TKChartAxis, bounds: CGRect): number;

	static new(): TKChartSeriesRender; // inherited from NSObject

	readonly series: NSArray<any>;

	readonly seriesRenderStates: TKMutableArray;

	constructor(o: { chart: TKChart; forSeries: NSArray<any>; });

	addSeries(series: TKChartSeries): boolean;

	createVisualPointPointIndexInSeries(data: TKChartData, index: number, series: TKChartSeries): TKChartVisualPoint;

	hitTestForPoint(point: CGPoint): TKChartSelectionInfo;

	initWithChartForSeries(chart: TKChart, series: NSArray<any>): this;

	isCompatibleWithSeries(series: TKChartSeries): boolean;

	locationOfPointInSeries(data: TKChartData, series: TKChartSeries): CGPoint;

	locationOfXNumericValueInSeries(numericValue: number, series: TKChartSeries): number;

	locationOfYNumericValueInSeries(numericValue: number, series: TKChartSeries): number;

	pointFromDataPointIndexInSeries(point: TKChartData, index: number, series: TKChartSeries): TKChartVisualPoint;

	selectionWillChangeForSeriesAndPoint(series: TKChartSeries, pointIndex: number): void;
}

declare class TKChartSeriesRenderState extends NSObject {

	static alloc(): TKChartSeriesRenderState; // inherited from NSObject

	static new(): TKChartSeriesRenderState; // inherited from NSObject

	readonly index: number;

	readonly oldPoints: TKMutableArray;

	points: TKMutableArray;

	constructor(o: { index: number; });

	animationKeyPathForPointAtIndex(pointIndex: number): string;

	initWithIndex(index: number): this;
}

declare const enum TKChartSeriesSelection {

	NotSet = 0,

	None = 1,

	Series = 2,

	DataPoint = 3,

	DataPointMultiple = 4
}

declare const enum TKChartSeriesSelectionMode {

	None = 0,

	Series = 1,

	DataPoint = 2
}

declare const enum TKChartSeriesSortMode {

	None = 0,

	XAxis = 1,

	YAxis = 2
}

declare class TKChartSeriesStyle {

	fill: TKFill;

	palette: TKChartPalette;

	paletteMode: TKChartSeriesStylePaletteMode;

	pointLabelStyle: TKChartPointLabelStyle;

	pointShape: TKShape;

	shapeMode: TKChartSeriesStyleShapeMode;

	shapePalette: TKChartPalette;

	stroke: TKStroke;
}

declare const enum TKChartSeriesStylePaletteMode {

	UseSeriesIndex = 0,

	UseItemIndex = 1
}

declare const enum TKChartSeriesStyleShapeMode {

	ShowOnMiddlePointsOnly = 0,

	AlwaysShow = 1
}

declare class TKChartSignalLineIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartSignalLineIndicator; // inherited from NSObject

	static new(): TKChartSignalLineIndicator; // inherited from NSObject

	readonly isSignalState: boolean;
}

declare class TKChartSimpleMovingAverageIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartSimpleMovingAverageIndicator; // inherited from NSObject

	static new(): TKChartSimpleMovingAverageIndicator; // inherited from NSObject

	period: number;
}

declare class TKChartSlowStochasticIndicator extends TKChartFastStochasticIndicator {

	static alloc(): TKChartSlowStochasticIndicator; // inherited from NSObject

	static new(): TKChartSlowStochasticIndicator; // inherited from NSObject
}

declare class TKChartSplineAreaSeries extends TKChartAreaSeries {

	static alloc(): TKChartSplineAreaSeries; // inherited from NSObject

	static new(): TKChartSplineAreaSeries; // inherited from NSObject
}

declare class TKChartSplineSeries extends TKChartLineSeries {

	static alloc(): TKChartSplineSeries; // inherited from NSObject

	static new(): TKChartSplineSeries; // inherited from NSObject
}

declare class TKChartStackInfo extends NSObject {

	static alloc(): TKChartStackInfo; // inherited from NSObject

	static new(): TKChartStackInfo; // inherited from NSObject

	stackID: any;

	stackMode: TKChartStackMode;

	constructor(o: { ID: any; withStackMode: TKChartStackMode; });

	initWithIDWithStackMode(aStackID: any, aStackMode: TKChartStackMode): this;
}

declare const enum TKChartStackMode {

	Stack = 0,

	Stack100 = 1
}

declare class TKChartStandardDeviationIndicator extends TKChartSimpleMovingAverageIndicator {

	static alloc(): TKChartStandardDeviationIndicator; // inherited from NSObject

	static new(): TKChartStandardDeviationIndicator; // inherited from NSObject
}

declare class TKChartStyle {
}

declare class TKChartTRIXIndicator extends TKChartSimpleMovingAverageIndicator {

	static alloc(): TKChartTRIXIndicator; // inherited from NSObject

	static new(): TKChartTRIXIndicator; // inherited from NSObject
}

declare const enum TKChartTitlePosition {

	Left = 0,

	Right = 1,

	Top = 2,

	Bottom = 3
}

declare class TKChartTitleStyle {
}

declare class TKChartTitleView extends UILabel {

	static alloc(): TKChartTitleView; // inherited from NSObject

	static appearance(): TKChartTitleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKChartTitleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKChartTitleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKChartTitleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKChartTitleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKChartTitleView; // inherited from UIAppearance

	static new(): TKChartTitleView; // inherited from NSObject

	position: TKChartTitlePosition;

	style: TKChartTitleStyle;
}

declare class TKChartTrackball extends NSObject {

	static alloc(): TKChartTrackball; // inherited from NSObject

	static new(): TKChartTrackball; // inherited from NSObject

	hideMode: TKChartTrackballHideMode;

	readonly isVisible: boolean;

	readonly line: TKChartTrackballLineAnnotation;

	marginForHitDetection: number;

	minimumPressDuration: number;

	orientation: TKChartTrackballOrientation;

	snapMode: TKChartTrackballSnapMode;

	readonly tooltip: TKChartTrackballTooltipAnnotation;

	constructor(o: { chart: TKChart; });

	hide(): void;

	initWithChart(chart: TKChart): this;

	showAtPoint(point: CGPoint): void;
}

declare const enum TKChartTrackballHideMode {

	OnTouchUp = 0,

	OnSecondTouch = 1
}

declare class TKChartTrackballLineAnnotation extends TKChartAnnotation {

	static alloc(): TKChartTrackballLineAnnotation; // inherited from NSObject

	static new(): TKChartTrackballLineAnnotation; // inherited from NSObject

	selectedPoints: NSArray<any>;

	style: TKChartCrossLineAnnotationStyle;

	constructor(o: { trackball: TKChartTrackball; });

	initWithTrackball(trackball: TKChartTrackball): this;

	updateContent(): void;
}

declare const enum TKChartTrackballOrientation {

	Horizontal = 0,

	Vertical = 1
}

declare const enum TKChartTrackballPinPosition {

	None = 0,

	Left = 1,

	Right = 2,

	Top = 3,

	Bottom = 4
}

declare const enum TKChartTrackballSnapMode {

	ClosestPoint = 0,

	AllClosestPoints = 1
}

declare class TKChartTrackballTooltipAnnotation extends TKChartBalloonAnnotation {

	static alloc(): TKChartTrackballTooltipAnnotation; // inherited from NSObject

	static new(): TKChartTrackballTooltipAnnotation; // inherited from NSObject

	pinPosition: TKChartTrackballPinPosition;

	constructor(o: { trackball: TKChartTrackball; });

	initWithTrackball(trackball: TKChartTrackball): this;

	updateContent(): void;
}

declare class TKChartTriangularMovingAverageIndicator extends TKChartSimpleMovingAverageIndicator {

	static alloc(): TKChartTriangularMovingAverageIndicator; // inherited from NSObject

	static new(): TKChartTriangularMovingAverageIndicator; // inherited from NSObject
}

declare class TKChartTrueRangeIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartTrueRangeIndicator; // inherited from NSObject

	static new(): TKChartTrueRangeIndicator; // inherited from NSObject
}

declare class TKChartTypicalPriceIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartTypicalPriceIndicator; // inherited from NSObject

	static new(): TKChartTypicalPriceIndicator; // inherited from NSObject
}

declare class TKChartUltimateOscillator extends TKChartFinancialIndicator {

	static alloc(): TKChartUltimateOscillator; // inherited from NSObject

	static new(): TKChartUltimateOscillator; // inherited from NSObject

	longPeriod: number;

	middlePeriod: number;

	shortPeriod: number;
}

declare class TKChartViewAnnotation extends TKChartPointAnnotation {

	static alloc(): TKChartViewAnnotation; // inherited from NSObject

	static new(): TKChartViewAnnotation; // inherited from NSObject

	view: UIView;

	constructor(o: { view: UIView; });

	constructor(o: { view: UIView; point: TKChartData; forSeries: TKChartSeries; });

	constructor(o: { view: UIView; point: TKChartData; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	constructor(o: { view: UIView; x: any; y: any; forSeries: TKChartSeries; });

	constructor(o: { view: UIView; x: any; y: any; forXAxis: TKChartAxis; forYAxis: TKChartAxis; });

	initWithView(aView: UIView): this;

	initWithViewPointForSeries(aView: UIView, point: TKChartData, series: TKChartSeries): this;

	initWithViewPointForXAxisForYAxis(aView: UIView, point: TKChartData, xAxis: TKChartAxis, yAxis: TKChartAxis): this;

	initWithViewXYForSeries(aView: UIView, xValue: any, yValue: any, series: TKChartSeries): this;

	initWithViewXYForXAxisForYAxis(aView: UIView, xValue: any, yValue: any, xAxis: TKChartAxis, yAxis: TKChartAxis): this;
}

declare class TKChartViewController extends UIViewController implements TKChartDataSource, TKChartDelegate {

	static alloc(): TKChartViewController; // inherited from NSObject

	static new(): TKChartViewController; // inherited from NSObject

	readonly chart: TKChart;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	chartAnimationForSeriesWithStateInRect(chart: TKChart, series: TKChartSeries, state: TKChartSeriesRenderState, rect: CGRect): CAAnimation;

	chartAttributedTextForAxisValueAtIndex(chart: TKChart, axis: TKChartAxis, value: any, index: number): NSAttributedString;

	chartDataPointAtIndexForSeriesAtIndex(chart: TKChart, dataIndex: number, seriesIndex: number): TKChartData;

	chartDataPointsForSeriesAtIndex(chart: TKChart, seriesIndex: number): NSArray<any>;

	chartDidDeselectPointInSeriesAtIndex(chart: TKChart, point: TKChartData, series: TKChartSeries, index: number): void;

	chartDidDeselectSeries(chart: TKChart, series: TKChartSeries): void;

	chartDidPan(chart: TKChart): void;

	chartDidSelectPointInSeriesAtIndex(chart: TKChart, point: TKChartData, series: TKChartSeries, index: number): void;

	chartDidSelectSeries(chart: TKChart, series: TKChartSeries): void;

	chartDidTapOnLegendItem(chart: TKChart, legendItem: TKChartLegendItem): void;

	chartDidZoom(chart: TKChart): void;

	chartLabelForDataPointPropertyInSeriesAtIndex(chart: TKChart, dataPoint: TKChartData, propertyName: string, series: TKChartSeries, dataIndex: number): TKChartPointLabel;

	chartLegendItemForSeriesAtIndex(chart: TKChart, series: TKChartSeries, index: number): TKChartLegendItem;

	chartNumberOfDataPointsForSeriesAtIndex(chart: TKChart, seriesIndex: number): number;

	chartPaletteItemForPointInSeries(chart: TKChart, index: number, series: TKChartSeries): TKChartPaletteItem;

	chartPaletteItemForSeriesAtIndex(chart: TKChart, series: TKChartSeries, index: number): TKChartPaletteItem;

	chartPointLabelRenderForSeriesWithRender(chart: TKChart, series: TKChartSeries, render: TKChartSeriesRender): TKChartPointLabelRender;

	chartShapeForSeriesAtIndex(chart: TKChart, series: TKChartSeries, index: number): TKShape;

	chartTextForAxisValueAtIndex(chart: TKChart, axis: TKChartAxis, value: any, index: number): string;

	chartTextForLabelAtPointPropertyInSeriesAtIndex(chart: TKChart, dataPoint: TKChartData, propertyName: string, series: TKChartSeries, dataIndex: number): string;

	chartTrackballDidHideSelection(chart: TKChart, selection: NSArray<any>): void;

	chartTrackballDidTrackSelection(chart: TKChart, selection: NSArray<any>): void;

	chartTrackballLabelForDatapointInSeries(chart: TKChart, point: TKChartData, series: TKChartSeries): string;

	chartUpdateLegendItemForSeriesAtIndex(chart: TKChart, item: TKChartLegendItem, series: TKChartSeries, index: number): void;

	chartWillPan(chart: TKChart): void;

	chartWillZoom(chart: TKChart): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSeriesForChart(chart: TKChart): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	seriesForChartAtIndex(chart: TKChart, index: number): TKChartSeries;
}

declare class TKChartVisualPoint extends NSObject implements NSCopying, UIDynamicItem {

	static alloc(): TKChartVisualPoint; // inherited from NSObject

	static new(): TKChartVisualPoint; // inherited from NSObject

	readonly CGPoint: CGPoint;

	animator: UIDynamicAnimator;

	readonly doubleValue: number;

	opacity: number;

	scaleFactor: number;

	x: number;

	y: number;

	readonly bounds: CGRect; // inherited from UIDynamicItem

	center: CGPoint; // inherited from UIDynamicItem

	readonly collisionBoundingPath: UIBezierPath; // inherited from UIDynamicItem

	readonly collisionBoundsType: UIDynamicItemCollisionBoundsType; // inherited from UIDynamicItem

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	transform: CGAffineTransform; // inherited from UIDynamicItem

	readonly  // inherited from NSObjectProtocol

	constructor(o: { point: CGPoint; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPoint(point: CGPoint): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKChartWeightedCloseIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartWeightedCloseIndicator; // inherited from NSObject

	static new(): TKChartWeightedCloseIndicator; // inherited from NSObject
}

declare class TKChartWeightedMovingAverageIndicator extends TKChartSimpleMovingAverageIndicator {

	static alloc(): TKChartWeightedMovingAverageIndicator; // inherited from NSObject

	static new(): TKChartWeightedMovingAverageIndicator; // inherited from NSObject
}

declare class TKChartWilliamsPercentIndicator extends TKChartFinancialIndicator {

	static alloc(): TKChartWilliamsPercentIndicator; // inherited from NSObject

	static new(): TKChartWilliamsPercentIndicator; // inherited from NSObject

	period: number;
}

declare const enum TKChartZoomMode {

	Symmetric = 0,

	SingleSide = 1
}

declare function TKCubicBezierCurveMake(start: CGPoint, controlPoint1: CGPoint, constrolPoint2: CGPoint, end: CGPoint): TKBezierCubicCurve;

declare function TKDistanceFromPointToLineSquared(point: CGPoint, lineA: CGPoint, lineB: CGPoint): number;

declare function TKDistanceWithTypeFromPointToLine(point: CGPoint, lineA: CGPoint, lineB: CGPoint, type: TKPointDistanceType): number;

declare function TKGetDistanceBetweenPoints(point1: CGPoint, point2: CGPoint): number;

declare function TKGetDistanceBetweenPointsSquared(point1: CGPoint, point2: CGPoint): number;

declare function TKGetDistanceWithTypeBetweenPoints(point1: CGPoint, point2: CGPoint, type: TKPointDistanceType): number;

declare function TKLineSegementGetPosition(line: TKLineSegment, baseline: TKLineSegment): TKLineSegmentPosition;

interface TKLineSegment {
	start: CGPoint;
	end: CGPoint;
}
declare var TKLineSegment: interop.StructType<TKLineSegment>;

declare function TKLineSegmentIntersection(line1: TKLineSegment, line2: TKLineSegment, intersection: interop.Pointer | interop.Reference<CGPoint>): boolean;

declare function TKLineSegmentMake(start: CGPoint, end: CGPoint): TKLineSegment;

declare const enum TKLineSegmentPosition {

	AboveLine = 0,

	BelowLine = 1,

	Intersected = 2,

	Coincidence = 3
}

declare function TKPathAddBezierCubicCurve(path: any, curve: TKBezierCubicCurve): void;

declare function TKPathAddLineSegment(path: any, line: TKLineSegment): void;

declare function TKPathBezierCurveIntersectionWithLine(curve: TKBezierCubicCurve, line: TKLineSegment, count: interop.Pointer | interop.Reference<number>): interop.Pointer | interop.Reference<CGPoint>;

declare function TKPathContainsPointWithDistanceType(path: any, point: CGPoint, type: TKPointDistanceType): boolean;

declare function TKPathCreateMutableLineFromPoints(points: interop.Pointer | interop.Reference<CGPoint>, count: number): interop.Unmanaged<any>;

declare function TKPathCreateMutableSplineFromPoints(points: interop.Pointer | interop.Reference<CGPoint>, count: number): interop.Unmanaged<any>;

declare function TKPathSubdivide(path: any, baseline: TKLineSegment): interop.Unmanaged<any>;

declare const enum TKPointDistanceType {

	X = 0,

	Y = 1,

	XY = 2,

	XYSquared = 3
}

declare function TKPointGetPosition(point: CGPoint, line: TKLineSegment): TKPointPosition;

declare const enum TKPointPosition {

	AboveLine = 0,

	BelowLine = 1,

	OnLine = 2
}

declare function TKPointPositionIsAboveOrOnLine(position: TKPointPosition): boolean;

declare function TKPointPositionIsBelowOrOnLine(position: TKPointPosition): boolean;

declare function TKPointRound(point: CGPoint): CGPoint;

declare function TKRectContainsPointWithDistanceType(rect: CGRect, point: CGPoint, type: TKPointDistanceType): boolean;

declare function TKReleasePath(path: any): void;

declare var TNSChartVersionNumber: number;

declare var TNSChartVersionString: interop.Reference<number>;
