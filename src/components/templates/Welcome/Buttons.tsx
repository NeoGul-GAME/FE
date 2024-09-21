import Button from "@/components/atoms/Button";
import { HTMLAttributes } from "react";
import { twJoin } from "tailwind-merge";

interface ButtonsProps extends HTMLAttributes<HTMLDivElement> {}

export default function Buttons({ className }: ButtonsProps) {
    return (
        <div className={twJoin("w-full max-w-[20rem] space-y-3", className)}>
            <div className="mx-auto flex flex-row gap-x-2">
                <Button
                    className="basis-full"
                    label="로그인 하기"
                    title="로그인 버튼"
                    colour="primary"
                    variant="selection"
                    size="2xl"
                />
                <Button
                    label="회원가입"
                    title="회원가입 버튼"
                    colour="secondary"
                    variant="selection"
                    size="2xl"
                />
            </div>

            <Button
                className="w-full"
                label="너굴 게임 규칙"
                title="너굴 게임 규칙 버튼"
                colour="primary"
                variant="selection"
                size="2xl"
            />
        </div>
    );
}
