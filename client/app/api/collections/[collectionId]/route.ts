import { connectToDB } from "@/lib/MongoDB";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import Collection from "@/lib/models/Collection";

export const DELETE = async (req: NextRequest, { params } : { params: {collectionId: string}}) => {
    try {
        const {userId} = auth()

        if(!userId) {
        return new NextResponse("Unauthorized" , {status: 401})
        }

        await connectToDB()

        await Collection.findByIdAndDelete(params.collectionId)
        return new NextResponse("Collection is deleted" , {status: 200})

    } catch (error) {
        console.log("[collectionId_DELETE], error")
        return new NextResponse("Internal error" , {status: 500})
    }
}