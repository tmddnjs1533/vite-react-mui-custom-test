import React, { FC, useCallback, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';

interface IFormInputs {
  id: string;
  password: string;
}

const schema = yup
  .object({
    id: yup.string().required('필수 입력 영역입니다.'),
    password: yup.string().required('필수 입력 영역입니다.'),
  })
  .required();
const ColorButton = styled(Button)({
  borderRadius: 50,
  backgroundColor: 'transparent',
  '&:disabled': {
    backgroundColor: '#D6D6D6',
  },
  '&:hover': {
    backgroundColor: '#FF0078',
  },
});
const Login: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      id: '',
      password: '',
    },
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onSubmit = (data: IFormInputs) => console.log(data);
  const handleClickShowPassword = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  const handleMouseDownPassword = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }, []);

  return (
    <div>
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*<input {...register('firstName')} />*/}
            <Controller
              render={({ field }) => (
                <TextField
                  id="id"
                  label="아이디"
                  variant="standard"
                  {...field}
                  error={!!errors.id}
                  helperText={errors.id?.message}
                />
              )}
              name="id"
              control={control}
              defaultValue=""
            />
            <FormControl variant="standard">
              <InputLabel htmlFor="password" error={!!errors.password}>
                비밀번호
              </InputLabel>
              <Controller
                render={({ field }) => (
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="비밀번호 표시"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    {...field}
                    error={!!errors.password}
                  />
                )}
                name="password"
                control={control}
              />
              {errors.password && <FormHelperText error>{errors.password?.message}</FormHelperText>}
            </FormControl>
          </form>
        </CardContent>
        {errors.password && <p role="alert">아이디와 비밀번호를 확인하세요.</p>}
        <CardActions
          sx={{
            justifyContent: 'center',
          }}
        >
          <ColorButton onClick={handleSubmit(onSubmit)} variant="contained">
            LOGIN
          </ColorButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
