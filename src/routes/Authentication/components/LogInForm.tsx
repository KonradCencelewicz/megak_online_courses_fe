import FormInput from "../../../reusableComponents/FormInput/FormInput";
import {Button} from "../../../reusableComponents/Button/Button";
import {LogInFormContainer, LogInInputsContainer} from "./LogInForm.styles";
import {Title} from "./Title";
import {FormFooter} from "./FormFooter";

export const LogInForm = () => {
    return <div>
        <LogInFormContainer>
            <Title title={'MegaK Coursera'}/>
            <LogInInputsContainer>
                <FormInput
                    name={'email'}
                    type={'email'}
                    label={"Email"}
                    onChange={() => console.log(true)}
                />
                <FormInput
                    name={'userPassword'}
                    type={'password'}
                    label={"Password"}
                    onChange={() => console.log(false)}
                />
                <Button label={'Log In'} onClick={() => console.log(true)}/>
            </LogInInputsContainer>
        </LogInFormContainer>
        <FormFooter />
    </div>
}