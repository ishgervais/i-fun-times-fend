/* eslint-disable @next/next/no-img-element */
import { IArticleCardProps } from "../../util/types";
import { useRouter } from "next/router";
export default function ArticleCard(props:IArticleCardProps): JSX.Element {
    const router = useRouter()
    const bgColors = ['bg-red-500','bg-green-500','bg-blue-500','bg-yellow-500','bg-black']
    let bgColor = props.section === 'Literature'?bgColors[0] :
    props.section === 'Academics'?bgColors[1] :
    props.section === 'Internal relations'?bgColors[2] :
    props.section === 'Culture week'?bgColors[3] :
    bgColors[4]
    
    return (
        <div className="my-5 text-gray-500 "
        onClick={()=>{router.push("/article?q="+props.id)}}
        >
            <div>
                <img src={props.featured_image} alt="" className="rounded md-img hover:opacity-50 cursor-pointer" />
            </div>
            <h1 className="text-xs my-3 flex gap-2 items-center">
                <span className={`${bgColor} text-white rounded-md px-2 p-1`}>{props.section}</span>{props.date}</h1>

            <p className="font-bold text-lg my-3 text-black hover:underline cursor-pointer">{props.title}</p>

            <p className="text-sm mt-4 hover:text-blue-500 cursor-pointer">
              {props.contentSample}
               </p>
            {/* author */}
            <h2 className="italic text-xs my-2">@{props.author}, Isomo scholar</h2>

        </div>
    )
}