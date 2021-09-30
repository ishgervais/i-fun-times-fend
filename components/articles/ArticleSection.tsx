import Article from "./Article";

/* eslint-disable @next/next/no-img-element */
export default function ArticleSection(): JSX.Element {
    return (
        <section className="w-full my-10 p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
            </div>
        </section>
    )
}