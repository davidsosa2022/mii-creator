import localforage from "localforage";
import { MiiEditor, MiiGender } from "../../../../class/MiiEditor";
import Modal from "../../../components/Modal";
import { _shutdown, Library, newMiiId } from "../../Library";
import { miiCreateDialog } from "./_dialog";

export const newFromScratch = () => {
  function cb(gender: MiiGender) {
    return () => {
      _shutdown()();
      new MiiEditor(gender, async (m, shouldSave) => {
        if (shouldSave === true) await localforage.setItem(await newMiiId(), m);
        Library();
      });
    };
  }

  Modal.modal(
    "Create new Mii from Scratch",
    "Select the Mii's gender",
    "body",
    {
      text: "Male",
      callback: cb(MiiGender.Male),
    },
    {
      text: "Female",
      callback: cb(MiiGender.Female),
    },
    {
      text: "Cancel",
      callback: () => miiCreateDialog(),
    }
  );
};
