import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { IBoxFormData, INewBoxFormProps } from "./interfaces";

/** Form for adding box.
 *
 * Props:
 * - createBox: fn to call in parent
 *
 * State:
 * formData: { height, width, backgroundColor }
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ createBox }: INewBoxFormProps) {
  const [formData, setFormData] = useState<IBoxFormData>({
    height: "",
    width: "",
    backgroundColor: "",
  });

  /** Update form input. */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Submit form: call function from parent & clear inputs. */
  function handleSubmit(evt: React.FormEvent): void {
    evt.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  }

  return (
      <div className="NewBoxForm">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="NewBoxForm-height">Height</label>
            <input
                id="NewBoxForm-height"
                onChange={handleChange}
                name="height"
                value={formData.height}
            />
          </div>
          <div>
            <label htmlFor="NewBoxForm-width">Width</label>
            <input
                id="NewBoxForm-width"
                onChange={handleChange}
                name="width"
                value={formData.width}
            />
          </div>
          <div>
            <label htmlFor="NewBoxForm-backgroundColor">Background Color</label>
            <input
                id="NewBoxForm-backgroundColor"
                onChange={handleChange}
                name="backgroundColor"
                value={formData.backgroundColor}
            />
          </div>
          <button className="NewBoxForm-addBtn">Add a new box!</button>
        </form>
      </div>
  );
}

export default NewBoxForm;
