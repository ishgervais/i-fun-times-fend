import { content } from "../../util/content";
import { IArticleCardProps } from "../../util/types";
import ArticleCard from "./ArticleCard";

/* eslint-disable @next/next/no-img-element */
export default function ArticleSection(): JSX.Element {
    const data:IArticleCardProps[] = content
    return (
        <section className="w-full mb-10 p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {data.map((item:IArticleCardProps,i:number)=>{
                   return(
                       <ArticleCard
                       key={i}
                       id={item.id}
                       featured_image={item.featured_image}
                       section={item.section}
                       date={item.date}
                       title={item.title}
                       contentSample={item.contentSample}
                       content={item.content}
                       author={item.author}

                       />
                   )
               })}
            </div>
        </section>
    )
}