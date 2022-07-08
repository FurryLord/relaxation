type Result = {
    content: string;
}

export function Result(props: Result) {
    return (
        <div>
            You prefer <strong>{props.content}</strong>!
        </div>

    );
}