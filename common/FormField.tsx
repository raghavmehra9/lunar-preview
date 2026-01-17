import Input from "@/components/form/Input";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";

type FormFieldProps = {
  label: string;
  children?: React.ReactNode;
  name: string;
  error?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChangeText: (value: string, name?: string) => void;
};

const FormField = ({
  label,
  children,
  name,
  error = "",
  value = "",
  placeholder = "",
  disabled = false,
  onChangeText,
}: FormFieldProps) => (
  <View style={styles.field}>
    <Label label={label} />
    {children ? (
      children
    ) : (
      <Input
        name={name}
        value={value}
        error={error}
        placeholder={placeholder}
        disabled={disabled}
        onChangeText={onChangeText}
      />
    )}
  </View>
);

const Label = ({ label }: { label: string }) => (
  <Text
    className="text-purple-jacarta font-Avenir-regular"
    style={styles.labelStyle}
  >
    {label}
  </Text>
);

export default FormField;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: scale(16),
  },
  field: {
    gap: scale(6),
  },
});
