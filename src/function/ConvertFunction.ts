import { Member } from "../constants/MemberConstants"

export const NameCodeToKoreanName = ( nameCode: string ):string => {
    if( nameCode == "" ) return "";
    if (nameCode in Member) {
        return Member[nameCode as keyof typeof Member];
    }
    throw new Error('Invalid member key');
}