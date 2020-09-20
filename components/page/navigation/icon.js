const Icon = ({ renderIcon, iconProps }) => {
    const Iconn = renderIcon;
    return (
        <div className="text-lg self-start mr-4 text-teal-500">
            <Iconn {...iconProps} />
        </div>
    );
};

export default Icon;
