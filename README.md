# GDS-prototype-form-autosave
A simple script that autosaves your form as the user progresses through it, pushing data to standard session data

Include the script in the page you wish to autosave. Give any form you want to autosave the class `autosave`

Display saved data on subsequent load by default by simply referencing the data object you need, empty data objects will render as blank as expected.

```<input type="text" value="data[mything]">```

Version supplied with no timeout in case you experience issues with timeout version.
