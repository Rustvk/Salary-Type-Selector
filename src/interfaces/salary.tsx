export type salaryType = {
    title: string;
    key: string;
    showInput?: boolean;
    showTaxHint?: boolean;
    typeHint?: string;
    hideTax?: boolean;
    inputHint?: string;
}

export type salaryState = {
    list: Array<salaryType>;
    hoveredHintType?: string|null;
}

export type formProps = {
    salary: salaryState;
    onHintChanged: Function;
    isSwitcherActive: boolean;
    salaryValue: number;
    selectedType: string;
}