import Form from "../../ui/Form.jsx";
import FormRow from "../../ui/FormRow.jsx";
import Input from "../../ui/Input.jsx";
import {useSettings} from "./useSettings.js";
import Spinner from "../../ui/Spinner.jsx";
import {useUpdateSetting} from "./useUpdateSetting.js";

function UpdateSettingsForm() {
	const {
		isLoading,
		settings: {minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice} = {},
	} = useSettings();

	const {isUpdating, updateSetting} = useUpdateSetting();

	if (isLoading) return <Spinner />;

	function handleUpdate(e, fieldName) {
		e.preventDefault();
		const {value} = e.target;
		if (!value) return;
		updateSetting({[fieldName]: value});
	}

	return (
		<Form>
			<FormRow label="Minimum nights/booking">
				<Input
					type="number"
					id="min-nights"
					disabled={isUpdating}
					defaultValue={minBookingLength}
					onBlur={e => handleUpdate(e, "minBookingLength")}
				/>
			</FormRow>
			<FormRow label="Maximum nights/booking">
				<Input
					type="number"
					id="max-nights"
					disabled={isUpdating}
					defaultValue={maxBookingLength}
					onBlur={e => handleUpdate(e, "maxBookingLength")}
				/>
			</FormRow>
			<FormRow label="Maximum guests/booking">
				<Input
					type="number"
					id="max-guests"
					disabled={isUpdating}
					defaultValue={maxGuestsPerBooking}
					onBlur={e => handleUpdate(e, "maxGuestsPerBooking")}
				/>
			</FormRow>
			<FormRow label="Breakfast price">
				<Input
					type="number"
					id="breakfast-price"
					disabled={isUpdating}
					defaultValue={breakfastPrice}
					onBlur={e => handleUpdate(e, "breakfastPrice")}
				/>
			</FormRow>
		</Form>
	);
}

export default UpdateSettingsForm;
