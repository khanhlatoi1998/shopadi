import ItemSpecial from "./ItemSpecial";

const Special = () => {



    return (
        <div className="py-6">
            <p className="font-bold text-lg">SPECIALS</p>
            <div className="py-4 border-b border-solid border-color_07">
                <ItemSpecial />
                <ItemSpecial />
            </div>
        </div>
    );
};

export default Special;