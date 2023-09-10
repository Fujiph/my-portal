import { AppButtonProps } from "./AppButtonProps"

export default function AppButton({label , onClick}: AppButtonProps) {
    return(
        <button onClick={onClick}>
            {label}
        </button>
    )
}