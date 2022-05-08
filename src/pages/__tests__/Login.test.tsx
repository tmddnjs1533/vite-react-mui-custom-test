import { render, screen, fireEvent, act } from '@testing-library/react';
import Login from '../Login';

describe('로그인 UI', () => {
  beforeEach(() => {
    render(<Login />);
  });

  it('id input 확인', () => {
    const idInput = screen.getByRole('textbox', {
      name: '아이디',
    });
    expect(idInput).toBeTruthy();
  });

  it('password input 확인', () => {
    const passwordInput = screen.getByLabelText('비밀번호');
    expect(passwordInput).toHaveProperty('type', 'password');
  });

  it('LOGIN button 확인', () => {
    const loginButton = screen.getByRole('button', {
      name: 'LOGIN',
    });
    expect(loginButton).toBeTruthy();
  });

  it('id input 입력 확인', () => {
    const idInput = screen.getByRole('textbox', {
      name: '아이디',
    });
    fireEvent.change(idInput, { target: { value: 'test' } });
    expect(idInput).toHaveProperty('value', 'test');
  });

  it('password input 확인', () => {
    const passwordInput = screen.getByLabelText('비밀번호');
    fireEvent.change(passwordInput, { target: { value: 'test' } });
    expect(passwordInput).toHaveProperty('value', 'test');
  });

  it('LOGIN button 그냥 클릭하면 required 에러 표시', async () => {
    const loginButton = screen.getByRole('button', {
      name: 'LOGIN',
    });
    await act(async () => {
      fireEvent.click(loginButton);
    });
    expect(await screen.findAllByText('필수 입력 영역입니다.')).toHaveLength(2);
    // const p = await screen.findByText('아이디와 비밀번호를 확인하세요', undefined, {
    //   timeout: 5000,
    // });
    // expect(p).toBeVisible();
  });
});
