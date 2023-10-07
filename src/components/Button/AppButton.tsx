import { AppButtonProps } from "./AppButtonProps"
import { PrimaryButton } from "./style"

export default function AppButton({label, onButtonClick}: AppButtonProps) {

    return(
        <PrimaryButton onClick={onButtonClick}>
            <p>
                {label}
            </p>
        </PrimaryButton>
    )
}