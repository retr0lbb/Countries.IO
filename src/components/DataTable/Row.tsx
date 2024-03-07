import { Checkbox } from '@/components/ui/checkbox';

interface RowProps {
    name: string;
    currency: string;
    capital: string[];
    populatio: number | null;
    lenguage: string;
    isOdd: boolean;
    flag: string;
    selected: boolean
    onSelected: () => void;
}

export const Row: React.FC<RowProps> = ({ capital, currency, lenguage, name, populatio, isOdd, flag, onSelected, selected }) => {


    return (
        <tr className={`rounded-full ${isOdd ? 'bg-zinc-800' : 'bg-zinc-900'} text-zinc-100`}>
            <td className="grid h-full place-items-center">
                <Checkbox checked={selected} onClick={onSelected} className="w-8 h-8 border-zinc-200" />
            </td>
            <td>
                <img className="ml-4 w-20" loading="eager" src={flag} alt="" />
            </td>
            <td className="py-4 px-6">{name}</td>
            <td className="px-6">{capital.join(', ')}</td>
            <td className="px-6">{populatio ?? ''}</td>
            <td className="px-6">{currency}</td>
            <td className="px-6">{lenguage}</td>
        </tr>
    );
};
