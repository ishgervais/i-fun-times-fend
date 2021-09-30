/* eslint-disable @next/next/no-img-element */
export default function Article(): JSX.Element {
    return (
        <div className="my-5 text-gray-500 ">
            <div>
                <img src="./community.png" alt="" className="rounded md-img" />
            </div>
            <h1 className="text-xs my-3 flex gap-2 items-center">
                <span className="bg-red-500 text-white rounded-md px-2 p-1">Literature</span>
                September 12, 2021</h1>

            <p className="font-bold text-lg my-3 text-black">We could not forget ixl, common lit, writing assignment that could make some sleep a half night.</p>

            <p className="text-sm mt-4">
            Boosting our English fluency, This quest equipped us with tremendous skills and knowledge that will transform our community. Isomo scholars were transformed into team players, critical thinkers, effective decision makers and servant leaders.
            </p>
             {/* author */}
             <h2 className="italic text-xs my-2">@Dadyne, Isomo scholar</h2>

        </div>
    )
}