import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { blue, green, orange } from "@mui/material/colors";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect, useRef, useState } from "react";
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
function TransformDate({ value }) {
  return new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

function Template({ value }) {
  return value || "";
}

function CheckboxUI( {defaultValue, onChange}) {

  return (
    <Checkbox
      checked={defaultValue}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
}

function TemplateLink({ val }) {
  console.log('TemplateLink')
  return (
    (
      <Link className="table-link" to={`/update/${val.id}`}>
        {val.title}
      </Link>
    )
  );
}
function Checked({ status }) {
  return status === 'completed' ? (
    <CheckCircleIcon fontSize="large" sx={{ color: green[600] }} />
  ) : (
    <DoDisturbOnIcon fontSize="large" sx={{ color: orange[600] }} />
  );
}

function ActionItem({ val, onDelete, onUpdate, onComplete }) {
 
  const deleteRecord = () => onDelete(val.id);
  const updateRecord = () => onUpdate(val.id);
  return (
    <div>
      <CheckboxUI
        defaultValue={val.status === 'completed'}
        onChange={(checked) => onComplete(checked, val.id)}
      />
      {/*  <EditIcon onClick={updateRecord} sx={{color: blue[500]}} /> */}
      <DeleteIcon onClick={deleteRecord} sx={{ color: "#FF0000" }} />
    </div>
  );
}

export {
  TransformDate,
  Checked,
  ActionItem,
  Template,
  TemplateLink,
  CheckboxUI,
};
