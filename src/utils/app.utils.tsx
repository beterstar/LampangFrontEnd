import Cookies from "universal-cookie";
import _, { debounce } from "lodash";

export interface IProfile {
    userId: number,
    email: string,
    mobilePhone: string,
    roleId: number,
    roleName: string,
    firstname: string,
    lastname: string
}

export const setPolicyCookie = (value: string) => localStorage.setItem("POLICY_COOKIE", value)
export const getPolicyCookie = () => localStorage.getItem("POLICY_COOKIE")

export const getToken = () => localStorage.getItem("TOKEN");

export const getRefreshToken = () => localStorage.getItem("REFRESH_TOKEN");

export const setToken = (value: string) => localStorage.setItem("TOKEN", value);

export const setRefreshToken = (token: string) => localStorage.setItem("REFRESH_TOKEN", token);

export const setOTPType = (value: any) => localStorage.setItem("OTP", value)

export const getOTPType = () => localStorage.getItem("OTP");

export const removeOTPREFER = () => localStorage.removeItem("OTPREFER");

export const setProfile = (value: any) => localStorage.setItem("PROFILE", JSON.stringify(value));

export const getLanguage = () => localStorage.getItem("language");

export const getProfile = (): any | IProfile => {
    const profile = localStorage.getItem("PROFILE");
    if (profile) {
        return JSON.parse(profile);
    }
    return null;
}


export const logout = (): void => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("OTPREFER");
    localStorage.removeItem("REFRESH_TOKEN");
    localStorage.removeItem("PROFILE");
    const cookies = new Cookies();
    cookies.remove("TOKEN");
    cookies.remove("PROFILE");
    cookies.remove("REFRESHTOKEN");
};


export const getTokenPromise = () => {
    return new Promise((resolve, reject) => {
        try {
            const token = localStorage.getItem('TOKEN');
            if (token) {
                resolve(token);
            } else {
                reject(new Error('Token not found'));
            }
        } catch (error) {
            reject(error);
        }
    });
};

export const convertDate = (inputDate: string) => {
    const parts = inputDate.split('/');
    if (parts.length !== 3) {
        return null;
    }
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    const date = new Date(year, month - 1, day);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

    return formattedDate;
}


export const ValidateTypeFile = (fileName: string, otherType?: string | undefined) => {
    const allowedExtensions = [".pdf", ".png", ".jpg", ".jpeg", otherType];
    const extension = fileName.substring(fileName.lastIndexOf(".")).toLowerCase();
    return allowedExtensions.includes(extension);
}


// set  , int number

type numberProps = {
    number: string;
    setValue: (value: string) => void
}
export const ConvertString = (props: numberProps) => {
    const rawValue = props.number.replace(/[^0-9]/g, '');
    const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    props.setValue(formattedValue.toString());
};

// set timeout search
interface searchProps {
    searchItem: string;
    setItem: (value: string) => void;
}
export const debouncedApiCall = debounce((props: searchProps) => {
    props.setItem(props.searchItem);
}, 400);
