import { Link } from 'react-router-dom';

/**
 * @typedef CardUserProps
 * @property {string} [image]
 * @property {string} [name]
 * @property {string} [username]
 * @property {string} [text]
 */

/**
 * @param {CardUserProps} props
 */
const CardUser = ({ image = '', name = '', username = '', text = '' }) => {
    return (
        <Link
            to={`/${username}`}
            className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg border border-slate-300 bg-slate-100 py-3 px-4 transition-all hover:bg-slate-400/30"
        >
            <img
                className="aspect-square w-20 rounded-full object-cover"
                src={image}
            />
            <div className="flex w-full flex-col items-start gap-x-2 pt-1 text-sm">
                <h3 className="text-sm font-semibold">{name}</h3>
                <p className="text-xs text-slate-500">{text}</p>
            </div>
        </Link>
    );
};

export default CardUser;
