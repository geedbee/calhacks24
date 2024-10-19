import {NextResponse} from "next/server";
import supabase from "@/utils/supabase";

export async function GET(request: Request, context: { params: any }){
    const {data,error} = await supabase
        .from('ice cream')
        .select("flavor")
        .eq("id",context.params.id)
    console.log(data);
    return new NextResponse(JSON.stringify(data));
}


