import {NextResponse} from "next/server";
import supabase from "@/utils/supabase";

export async function GET(){
    const {data,error} = await supabase
        .from('ice cream')
        .select("*")
    console.log(data);
    return new NextResponse(JSON.stringify(data));
}

export async function POST(){

}
