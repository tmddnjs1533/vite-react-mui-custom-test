import { Header } from 'components/Header';
import Login from './pages/Login';
import { Button } from 'components/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useForm, Controller } from 'react-hook-form';

// interface ICategory {
//   _id: number;
//   label: string;
// }

function App() {
  const { control, watch } = useForm();
  console.log(watch('category'));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <Header title="hola" />
                  <Button onClick={() => alert('hola')}>Heyo</Button>
                  <Controller
                    name="category"
                    control={control}
                    render={({ field: { onChange, ...rest } }) => (
                      <Autocomplete
                        disablePortal
                        options={category}
                        getOptionLabel={(option) => option.label}
                        onChange={(_, data) => onChange(data._id)}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField {...params} label="카테고리" variant="standard" />
                        )}
                        {...rest}
                      />
                    )}
                  />
                </>
              }
            />
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const category = [
  {
    _id: 1,
    label: '차량유지비',
  },
  {
    _id: 2,
    label: '복리후생비',
  },
  {
    _id: 3,
    label: '접대비',
  },
];
