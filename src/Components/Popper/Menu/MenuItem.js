import Button from "@/Components/Button";

function MenuItem({ data, className, onClick }) {
    
    return (
        <Button className={className} to={data.to} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
