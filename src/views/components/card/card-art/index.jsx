import { Link } from 'react-router-dom';
import moment from 'moment';

/**
 * @typedef CardArtProps
 * @property {string} [image]
 * @property {string} [slug]
 * @property {string} [title]
 * @property {string} [name]
 * @property {string} [username]
 * @property {string} [date_created]
 */

/**
 * @param {CardArtProps} props
 */
const CardArt = ({
    image = '',
    slug = '',
    title = '',
    name = '',
    username = '',
    date_created = ''
}) => {
    return (
        <div className="group w-full hover:cursor-pointer hover:transition-all">
            <Link to={`/art/${slug}`}>
                <div className="relative aspect-[3.25/2] w-full overflow-hidden rounded-lg lg:aspect-[2.75/2]">
                    <img className="h-full w-full object-cover" src={image} />
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-slate-900 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-80"></div>
                    <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-xs text-white opacity-0 transition-all group-hover:opacity-100">
                        view detail
                    </div>
                </div>
            </Link>

            <div className="flex w-full items-center justify-between gap-2 pt-1 text-sm">
                <div>
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <Link
                        to={`/${username}`}
                        className="text-xs text-slate-500 hover:underline"
                    >
                        {name}
                    </Link>
                </div>
                <p className="text-right text-xs text-slate-500">
                    {moment.utc(date_created).format('DD MMMM YYYY')}
                </p>
            </div>
        </div>
    );
};

export default CardArt;
