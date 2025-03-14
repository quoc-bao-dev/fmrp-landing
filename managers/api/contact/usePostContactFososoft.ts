import apiContacts from "@/services/contacts/contacts.services";
import { useAuthStore } from "@/stores/useAuthStores";
import { useToastStore } from "@/stores/useToastStore";
import { useMutation } from "@tanstack/react-query";

export const usePostContactFososoft = (form: any) => {
    const { informationUser } = useAuthStore();

    const { setToast } = useToastStore();

    const postContactFososoftMutation = useMutation({
        mutationFn: async (formData: any) => {
            const { data: r } = await apiContacts.postContactFososoft(formData);
            return r;
        },
        onSuccess: ({ message, result }) => {
            if (result) {
                form.reset();
                if (informationUser) {
                    form.resetField("title", "");
                    form.setValue("file", []);
                    form.resetField("description", "");
                    form.setValue("email", informationUser?.email_client ?? "");
                    form.setValue("name", informationUser?.fullname ?? "");
                    if (informationUser.phonenumber) {
                        form.setValue("phone", informationUser?.phonenumber ?? "");
                    } else {
                        form.resetField("phone", "");
                    }
                }
                setToast(true, "success", message);
                return;
            }
            setToast(true, "error", message);
        },
        onError: (error) => {
            throw error;
        },
    });

    const onSubmit = async (data: any) => {
        try {
            console.log('check data:', data);

            const dataSubmit = {

            }

            postContactFososoftMutation.mutate(dataSubmit);
        } catch (error) {
            throw error;
        }
    };

    return { onSubmit, isLoading: postContactFososoftMutation.isPending };
};
