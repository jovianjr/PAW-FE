/**
 * @typedef CardArtProps
 * @property {string} [image]
 * @property {string} [title]
 * @property {string} [text]
 * @property {string} [date_created]
 */

/**
 * @param {CardArtProps} props
 */
const CardArt = ({ image = '', title = '', text = '', date_created = '' }) => {
    return (
        <div className="group w-full hover:cursor-pointer hover:transition-all">
            <div className="relative aspect-[2.75/2] w-full overflow-hidden rounded-lg">
                <img className="h-full w-full" src={image} />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-slate-900 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-80"></div>
                <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-xs text-white opacity-0 transition-all group-hover:opacity-100">
                    view detail
                </div>
            </div>

            <div className="flex w-full items-center justify-between pt-1 text-sm">
                <div>
                    <h3 className="text-sm font-semibold group-hover:underline">
                        {title}
                    </h3>
                    <p className="text-xs text-slate-500">{text}</p>
                </div>
                <p className="text-xs text-slate-500">{date_created}</p>
            </div>
        </div>
    );
};

export default CardArt;
