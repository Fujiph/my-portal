import { AppButtonProps } from "./AppButtonProps"
import { PrimaryButton } from "./style"

export default function AppButton({label , onClick}: AppButtonProps) {
    return(
        <PrimaryButton onClick={onClick}>
            <p>
                {label}
            </p>
        </PrimaryButton>
    )
}