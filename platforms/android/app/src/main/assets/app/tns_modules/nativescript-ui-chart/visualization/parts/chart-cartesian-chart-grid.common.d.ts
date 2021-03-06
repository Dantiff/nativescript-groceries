import { RadChartBase } from "../../ui-chart.common";
import { ViewBase, Property } from "tns-core-modules/ui/core/view";
export declare class RadCartesianChartGrid extends ViewBase {
    horizontalStrokeColor: string;
    verticalStrokeColor: string;
    horizontalStrokeWidth: number;
    verticalStrokeWidth: number;
    verticalStripLineColor: string;
    horizontalStripLineColor: string;
    verticalLinesVisible: boolean;
    horizontalLinesVisible: boolean;
    verticalStripLinesVisible: boolean;
    horizontalStripLinesVisible: boolean;
    _android: com.telerik.widget.chart.visualization.cartesianChart.CartesianChartGrid;
    _ios: TKChartGridStyle;
    static horizontalStrokeColorProperty: Property<RadCartesianChartGrid, string>;
    static verticalStrokeColorProperty: Property<RadCartesianChartGrid, string>;
    static horizontalStrokeWidthProperty: Property<RadCartesianChartGrid, number>;
    static verticalStrokeWidthProperty: Property<RadCartesianChartGrid, number>;
    static verticalStripLineColorProperty: Property<RadCartesianChartGrid, string>;
    static horizontalStripLineColorProperty: Property<RadCartesianChartGrid, string>;
    static verticalLinesVisibleProperty: Property<RadCartesianChartGrid, boolean>;
    static horizontalLinesVisibleProperty: Property<RadCartesianChartGrid, boolean>;
    static verticalStripLinesVisibleProperty: Property<RadCartesianChartGrid, boolean>;
    static horizontalStripLinesVisibleProperty: Property<RadCartesianChartGrid, boolean>;
    protected _owner: RadChartBase;
    owner: RadChartBase;
    applyGridStyle(): void;
    protected onOwnerChanged(): void;
    private horizontalStripLinesVisibleChanged(oldValue, newValue);
    protected onHorizontalStripLinesVisibleChanged(oldValue: boolean, newValue: boolean): void;
    private verticalStripLinesVisibleChanged(oldValue, newValue);
    protected onVerticalStripLinesVisibleChanged(oldValue: boolean, newValue: boolean): void;
    private verticalLinesVisibleChanged(oldValue, newValue);
    protected onVerticalLinesVisibleChanged(oldValue: boolean, newValue: boolean): void;
    private horizontalLinesVisibleChanged(oldValue, newValue);
    protected onHorizontalLinesVisibleChanged(oldValue: boolean, newValue: boolean): void;
    private verticalStrokeColorChanged(oldValue, newValue);
    protected onVerticalStrokeColorChanged(oldValue: string, newValue: string): void;
    private horizontalStrokeColorChanged(oldValue, newValue);
    protected onHorizontalStrokeColorChanged(oldValue: string, newValue: string): void;
    private horizontalStrokeWidthChanged(oldValue, newValue);
    protected onHorizontalStrokeWidthChanged(oldValue: number, newValue: number): void;
    private verticalStrokeWidthChanged(oldValue, newValue);
    protected onVerticalStrokeWidthChanged(oldValue: number, newValue: number): void;
    private verticalStripLineColorChanged(oldValue, newValue);
    protected onVerticalStripLineColorChanged(oldValue: string, newValue: string): void;
    private horizontalStripLineColorChanged(oldValue, newValue);
    protected onHorizontalStripLineColorChanged(oldValue: string, newValue: string): void;
}
