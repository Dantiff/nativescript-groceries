import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";
import * as chartInitializersCommon from '../initializers/chart-initializers.common';
import * as chartCommonModule from "../ui-chart.common";
import { CartesianAxis, CategoricalAxis } from "../visualization/views/chart-axis.common";
import { RadLegendView } from "../visualization/views/chart-legend-view.common";
import { Palette } from "../visualization/parts/chart-palette.common";
import { ScatterSeries, ChartSeries, CartesianSeries, CategoricalSeries, ScatterBubbleSeries, PieSeries, DonutSeries, BarSeries } from "../visualization/views/chart-series.common";
export declare class ChartBaseValueMapper implements chartInitializersCommon.ChartBaseValueMapper {
    private _currentChart;
    onLegendChanged(oldValue: RadLegendView, newValue: RadLegendView, chart: chartCommonModule.RadChartBase): void;
    onPalettesChanged(data: ChangedData<any>, chart: chartCommonModule.RadChartBase): void;
    onPalettesPropertyChanged(oldValue: ObservableArray<Palette>, newValue: ObservableArray<Palette>, chart: chartCommonModule.RadChartBase): void;
    private loadPalette(palettes, chart);
    private getPalettesForSeries(source, series);
    private applyPalettesToSeries(palettes, series, normalPalette, selectionPalette);
    private buildNewPaletteForSeries(palette, series, nativePaletteEntries);
    private getPaletteEntryIndexForSeries(series);
    onSeriesChanged(data: ChangedData<any>, chart: chartCommonModule.RadChartBase): void;
    onSeriesPropertyChanged(oldValue: ObservableArray<any>, newValue: ObservableArray<any>, chart: chartCommonModule.RadChartBase): void;
    loadSeries(chart: chartCommonModule.RadChartBase): void;
    reloadPalettes(chart: chartCommonModule.RadChartBase): void;
    loadAnnotations(chart: chartCommonModule.RadChartBase): void;
    onAnnotationsChanged(data: ChangedData<any>, chart: chartCommonModule.RadChartBase): void;
    onAnnotationsPropertyChanged(oldValue: ObservableArray<any>, newValue: ObservableArray<any>, chart: chartCommonModule.RadChartBase): void;
    onSelectionModeChanged(oldValue: string, newValue: string, chart: chartCommonModule.RadChartBase): void;
    updateHorizontalAxisPalette(chart: chartCommonModule.RadChartBase): void;
    updateVerticalAxisPalette(chart: chartCommonModule.RadChartBase): void;
    private resolveVerticalAxisForSeries(series);
    private resolveHorizontalAxisForSeries(series);
    private setAxisPaletteValues(axis, paletteName, chart);
}
export declare class CartesianAxisValueMapper implements chartInitializersCommon.CartesianAxisValueMapper {
    onLineThicknessChanged(oldValue: number, newValue: number, axis: CartesianAxis): void;
    onLineColorChanged(oldValue: string, newValue: string, axis: CartesianAxis): void;
    onLineHiddenChanged(oldValue: boolean, newValue: boolean, axis: CartesianAxis): void;
    onLabelTextColorChanged(oldValue: string, newValue: string, axis: CartesianAxis): void;
    onLabelMarginChanged(oldValue: any, newValue: any, axis: CartesianAxis): void;
    onLabelRotationAngleChanged(oldValue: any, newValue: any, axis: CartesianAxis): void;
    onLabelFitModeChanged(oldValue: any, newValue: any, axis: CartesianAxis): void;
    onLabelLayoutModeChanged(oldValue: any, newValue: any, axis: CartesianAxis): void;
    onLabelFormatChanged(oldValue: any, newValue: any, axis: CartesianAxis): void;
    onHorizontalLocationChanged(oldValue: string, newValue: string, axis: CartesianAxis): void;
    onVerticalLocationChanged(oldValue: string, newValue: string, axis: CartesianAxis): void;
    onLabelSizeChanged(oldValue: any, newValue: any, axis: CartesianAxis): void;
    onAllowZoomChanged(oldValue: boolean, newValue: boolean, axis: CartesianAxis): void;
    onAllowPanChanged(oldValue: boolean, newValue: boolean, axis: CartesianAxis): void;
    private updatePanZoomBehavior(axis);
    onHiddenChanged(oldValue: boolean, newValue: boolean, axis: CartesianAxis): void;
}
export declare class CategoricalAxisValueMapper extends CartesianAxisValueMapper implements chartInitializersCommon.CategoricalAxisValueMapper {
    onMajorTickIntervalChanged(oldValue: number, newValue: number, axis: CategoricalAxis): void;
    onPlotModeChanged(oldValue: string, newValue: string, axis: CategoricalAxis): void;
    onLastLabelVisibilityChanged(oldValue: string, newValue: string, axis: CategoricalAxis): void;
    onFirstLabelVisibilityChanged(oldValue: string, newValue: string, axis: CategoricalAxis): void;
}
export declare class ChartSeriesValueMapper implements chartInitializersCommon.ChartSeriesValueMapper {
    onShowLabelsChanged(oldValue: boolean, newValue: boolean, series: ChartSeries): void;
    onLegendTitleChanged(newValue: string, series: ChartSeries): void;
    onItemsChanged(oldValue: any, newValue: any, series: ChartSeries): void;
    onValuePropertyChanged(oldValue: any, newValue: any, series: ChartSeries): void;
    onLabelStyleChanged(oldValue: string, newValue: string, series: ChartSeries): void;
    onSelectionModeChanged(oldValue: string, newValue: string, series: ChartSeries): void;
    applyLabelStyle(series: ChartSeries, chart?: any): void;
}
export declare class CartesianSeriesValueMapper extends ChartSeriesValueMapper implements chartInitializersCommon.CartesianSeriesValueMapper {
    onHorizontalAxisChanged(oldValue: CartesianAxis, newValue: CartesianAxis, series: CartesianSeries): void;
    onVerticalAxisChanged(oldValue: CartesianAxis, newValue: CartesianAxis, series: CartesianSeries): void;
    onItemsChanged(oldValue: any, newValue: any, series: ChartSeries): void;
}
export declare class ScatterSeriesValueMapper extends CartesianSeriesValueMapper implements chartInitializersCommon.ScatterSeriesValueMapper {
    onXPropertyChanged(oldValue: string, newValue: string, series: ScatterSeries): void;
    onYPropertyChanged(oldValue: string, newValue: string, series: ScatterSeries): void;
}
export declare class ScatterBubbleSeriesValueMapper extends ScatterSeriesValueMapper implements chartInitializersCommon.ScatterBubbleSeriesValueMapper {
    onBubbleSizePropertyChanged(oldValue: string, newValue: string, series: ScatterBubbleSeries): void;
    onBubbleScaleChanged(oldValue: number, newValue: number, series: ScatterBubbleSeries): void;
}
export declare class CategoricalSeriesValueMapper extends CartesianSeriesValueMapper implements chartInitializersCommon.CategoricalSeriesValueMapper {
    updateNative(series: CategoricalSeries): void;
    onCategoryPropertyChanged(oldValue: string, newValue: string, series: CategoricalSeries): void;
    onStackModePropertyChanged(oldValue: string, newValue: string, series: CategoricalSeries): void;
}
export declare class BarSeriesValueMapper extends CategoricalSeriesValueMapper implements chartInitializersCommon.BarSeriesValueMapper {
    onMinBarSizeChanged(oldValue: number, newValue: number, series: BarSeries): void;
    onMaxBarSizeChanged(oldValue: number, newValue: number, series: BarSeries): void;
}
export declare class PieSeriesValueMapper extends ChartSeriesValueMapper implements chartInitializersCommon.PieSeriesValueMapper {
    onLabelPropertyChanged(oldValue: string, newValue: string, series: PieSeries): void;
    onLegendTitleChanged(newValue: string, series: PieSeries): void;
    onExpandRadiusChanged(oldValue: number, newValue: number, series: PieSeries): void;
    onOuterRadiusFactorChanged(oldValue: number, newValue: number, series: PieSeries): void;
    onStartAngleChanged(oldValue: number, newValue: number, series: PieSeries): void;
    onEndAngleChanged(oldValue: number, newValue: number, series: PieSeries): void;
    onShowPercentageChanged(oldValue: boolean, newValue: boolean, series: PieSeries): void;
}
export declare class DonutSeriesValueMapper extends PieSeriesValueMapper implements chartInitializersCommon.DonutSeriesValueMapper {
    onInnerRadiusFactorChanged(oldValue: any, newValue: any, series: DonutSeries): void;
}
