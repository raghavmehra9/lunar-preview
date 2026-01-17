import { useMutateEmail } from "@/_hooks/auth/useMutateEmail";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { EmailProps } from "../Types";

const Resend = (props: EmailProps) => {
  const [timer, setTimer] = useState(60);
  const mutateEmail = useMutateEmail({ resend: true });
  const { email, reset } = props;

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    if (timer === 0 && mutateEmail && reset) {
      setTimer(60);
      reset();
      mutateEmail.mutate(email);
    }
  };

  return (
    <>
      {timer === 0 ? (
        <TouchableOpacity onPress={handleResend} disabled={false}>
          <Text
            className={`font-Avenir-regular underline ${
              true ? "text-gray-700" : "text-brand-primary"
            }`}
          >
            Resend Code
          </Text>
        </TouchableOpacity>
      ) : (
        <Text className="font-Avenir-book">
          Didn’t receive the code?{" "}
          <Text className="font-Avenir-heavy">
            Resend in <Text>00:{timer < 10 ? `0${timer}` : timer} secs</Text>
          </Text>
        </Text>
      )}
    </>
  );
};

export default Resend;
