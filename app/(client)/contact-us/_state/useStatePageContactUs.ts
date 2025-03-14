import { create } from "zustand";

interface IInput {
    value: string;
    selected: Record<string, any>;
    open: boolean;
}
interface IFilterApplication {
    country?: IInput;
    currency_money?: IInput;
    variants?: IInput
}
// Factory function to create IInput defaults to avoid repetition
const createDefaultInput = (): IInput => ({
    value: "",
    selected: {},
    open: false,
});

interface InitialStateStore {
    isStatePageContactUs: {
        tokenCaptcha: string,
        tokenChecked: boolean,
        tokenFailed: boolean,
        combobox: IFilterApplication;
    };
    queryKeyIsStatePageContactUs: (key: Partial<InitialStateStore["isStatePageContactUs"]>) => void;
}

export const useStatePageContactUs = create<InitialStateStore>((set) => ({
    isStatePageContactUs: {
        tokenCaptcha: "",
        tokenChecked: false,
        tokenFailed: false,
        combobox: {
            country: createDefaultInput(),
            currency_money: createDefaultInput(),
            variants: createDefaultInput(),
        },
    },
    queryKeyIsStatePageContactUs: (key: any) =>
        set((state) => ({
            ...state,
            isStatePageContactUs: {
                ...state.isStatePageContactUs,
                ...key,
            },
        })),
}));
