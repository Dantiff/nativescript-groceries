import * as annotationModule from "./chart-annotation.common";
import * as chartModule from "../../";
export declare class ChartGridLineAnnotation extends annotationModule.ChartGridLineAnnotation {
    private _android;
    readonly android: com.telerik.widget.chart.visualization.annotations.cartesian.CartesianGridLineAnnotation;
    _init(owner: chartModule.RadCartesianChart): void;
    private createAnnotation();
    _onOwnerUICreated(): void;
    _createNative(): void;
    protected onValueChanged(oldValue: any, newValue: any): void;
    protected onAxisIdChanged(oldValue: string, newValue: string): void;
    protected onZPositionChanged(oldValue: string, newValue: string): void;
    protected onHiddenChanged(oldValue: boolean, newValue: boolean): void;
    protected onStrokeWidthChanged(oldValue: number, newValue: number): void;
    protected onStrokeColorChanged(oldValue: string, newValue: string): void;
    protected onStrokeDashPatternChanged(oldValue: string, newValue: string): void;
    private updateValue();
}
export declare class ChartPlotBandAnnotation extends annotationModule.ChartPlotBandAnnotation {
    private _android;
    readonly android: com.telerik.widget.chart.visualization.annotations.cartesian.CartesianPlotBandAnnotation;
    _init(owner: chartModule.RadCartesianChart): void;
    private createAnnotation();
    _onOwnerUICreated(): void;
    _createNative(): void;
    protected onMinValueChanged(oldValue: any, newValue: any): void;
    protected onMaxValueChanged(oldValue: any, newValue: any): void;
    protected onFillColorChanged(oldValue: string, newValue: string): void;
    protected onAxisIdChanged(oldValue: string, newValue: string): void;
    protected onZPositionChanged(oldValue: string, newValue: string): void;
    protected onHiddenChanged(oldValue: boolean, newValue: boolean): void;
    protected onStrokeWidthChanged(oldValue: number, newValue: number): void;
    protected onStrokeColorChanged(oldValue: string, newValue: string): void;
    protected onStrokeDashPatternChanged(oldValue: string, newValue: string): void;
}
