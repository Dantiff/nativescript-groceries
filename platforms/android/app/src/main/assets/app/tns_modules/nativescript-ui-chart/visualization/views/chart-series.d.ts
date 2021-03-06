import * as seriesCommonModule from "./chart-series.common";
export declare class PieSeries extends seriesCommonModule.PieSeries {
    private _android;
    readonly android: com.telerik.widget.chart.visualization.pieChart.PieSeries;
    protected onLegendTitleChanged(oldValue: string, newValue: string): void;
}
export declare class DonutSeries extends seriesCommonModule.DonutSeries {
    private _android;
    readonly android: com.telerik.widget.chart.visualization.pieChart.DoughnutSeries;
    protected onLegendTitleChanged(oldValue: string, newValue: string): void;
}
export declare class LineSeries extends seriesCommonModule.CategoricalSeries {
    protected _android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.LineSeries;
    constructor();
    readonly android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.LineSeries;
    protected onLegendTitleChanged(oldValue: string, newValue: string): void;
}
export declare class OhlcSeries extends seriesCommonModule.OhlcSeries {
    protected _android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.OhlcSeriesBase;
    constructor();
    readonly android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.OhlcSeriesBase;
    protected onLegendTitleChanged(oldValue: string, newValue: string): void;
    protected onValuePropertyChanged(oldValue: any, newValue: any): void;
    protected onHighPropertyNameChanged(oldValue: string, newValue: string): void;
    protected onLowPropertyNameChanged(oldValue: string, newValue: string): void;
    protected onOpenPropertyNameChanged(oldValue: string, newValue: string): void;
    protected onClosePropertyNameChanged(oldValue: string, newValue: string): void;
}
export declare class CandlestickSeries extends OhlcSeries {
    constructor();
    readonly android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.OhlcSeriesBase;
    protected onLegendTitleChanged(oldValue: string, newValue: string): void;
}
export declare class SplineSeries extends LineSeries {
    protected _android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.SplineSeries;
    constructor();
    readonly android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.SplineSeries;
    protected onLegendTitleChanged(oldValue: string, newValue: string): void;
}
export declare class AreaSeries extends seriesCommonModule.CategoricalSeries {
    protected _android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.AreaSeries;
    constructor();
    readonly android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.AreaSeries;
    protected onLegendTitleChanged(oldValue: string, newValue: string): void;
}
export declare class SplineAreaSeries extends AreaSeries {
    protected _android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.SplineAreaSeries;
    constructor();
    readonly android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.SplineAreaSeries;
    protected onLegendTitleChanged(oldValue: string, newValue: string): void;
}
export declare class ScatterBubbleSeries extends seriesCommonModule.ScatterBubbleSeries {
    private _android;
    constructor();
    readonly android: com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterBubbleSeries;
    protected onLegendTitleChanged(oldValue: string, newValue: string): void;
}
export declare class BubbleSeries extends seriesCommonModule.BubbleSeries {
    private _android;
    constructor();
    readonly android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.BubbleSeries;
    protected onBubbleScaleChanged(oldValue: number, newValue: number): void;
    protected onBubbleSizePropertyChanged(oldValue: string, newValue: string): void;
    protected onLegendTitleChanged(oldValue: string, newValue: string): void;
}
export declare class ScatterSeries extends seriesCommonModule.ScatterSeries {
    protected _android: com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterPointSeries;
    readonly android: com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterPointSeries;
    protected onLegendTitleChanged(oldValue: string, newValue: string): void;
}
export declare class BarSeries extends seriesCommonModule.BarSeries {
    protected _android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.BarSeries;
    constructor();
    readonly android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.BarSeries;
    protected onLegendTitleChanged(oldValue: string, newValue: string): void;
}
export declare class RangeBarSeries extends seriesCommonModule.RangeBarSeries {
    protected _android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.RangeBarSeries;
    constructor();
    readonly android: com.telerik.widget.chart.visualization.cartesianChart.series.categorical.RangeBarSeries;
    protected onValuePropertyChanged(oldValue: any, newValue: any): void;
    protected onHighPropertyNameChanged(oldValue: string, newValue: string): void;
    protected onLowPropertyNameChanged(oldValue: string, newValue: string): void;
    protected onLegendTitleChanged(oldValue: string, newValue: string): void;
}
