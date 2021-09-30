/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { content } from "../../util/content";
import { IArticleCardProps } from "../../util/types";
export default function Article(): JSX.Element {
    const router = useRouter()
    let data:IArticleCardProps[] = content
    let article:IArticleCardProps = data[0]
    for(let i = 0; i < data.length; i++) {
        if(data[i].id === router.query.q){
            article = (data[i])
        }
    }
    const bgColors = ['bg-red-500','bg-green-500','bg-blue-500','bg-yellow-500','bg-black']
    let bgColor = article.section === 'Literature'?bgColors[0] :
    article.section === 'Academics'?bgColors[1] :
    article.section === 'Internal relations'?bgColors[2] :
    article.section === 'Culture week'?bgColors[3] :
    bgColors[4]
    
    return (
        <section className="p-2 w-full flex justify-center my-10">
            <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 mt-5 md:my-10">
                <div className="">
                        <img src={article?.featured_image} alt="" className=" my-5 rounded lg-img" />

                </div>
                <div className="text-gray-500 my-4">
                <h1 className="text-xs my-3 flex gap-2 items-center">
                <span className={`${bgColor} text-white rounded-md px-2 p-1`}>{article.section}</span>
               {article.date}</h1>
                    <p className="my-5 text-black text-3xl font-bold">
                    {article.title}
                    </p>
                    {/* author */}
                    <h2 className="italic text-xs my-5">@{article.author}, Isomo scholar</h2>
                </div>
            </div>

             {/* content */}
             <p className="text-sm text-gray-500">
             {article.content}
                    </p>

            </div>
        </section>
    )
}