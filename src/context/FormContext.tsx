import React, { createContext, useState, ReactNode } from 'react';

interface FormData {
    url: string;
    username: string;
    password: string;

}

interface FormContextType {
    form: FormData;
    setForm: React.Dispatch<React.SetStateAction<FormData>>;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [form, setForm] = useState<FormData>({
        url: '',
        username: '',
        password: '',
    });

    return (
        <FormContext.Provider value={{ form, setForm }}>
            {children}
        </FormContext.Provider>
    );
};