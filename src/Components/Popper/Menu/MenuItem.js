import Button from "@/Components/Button";

function MenuItem({ data, className }) {
    return (
        <Button className={className} to={data.to} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
