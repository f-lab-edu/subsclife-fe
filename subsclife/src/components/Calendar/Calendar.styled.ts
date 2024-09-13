import styled from "styled-components";

const Container = styled.div`
  abbr[title] {
    position: relative;
    z-index: 10;
    text-decoration: none;
    border-bottom: none;
  }

  .react-calendar {
    color: ${({ theme }) => theme.color.green};
    background-color: transparent;
    border: none;
  }

  .react-calendar__tile {
    position: relative;
    color: ${({ theme }) => theme.color.green};

    &:enabled:hover {
      background: ${({ theme }) => theme.color["green-6"]};
      border-radius: 15px;
    }

    &:disabled {
      background-color: transparent;
      color: ${({ theme }) => theme.color["gray-6"]};
    }
  }

  .react-calendar__tile--now {
    background-color: ${({ theme }) => theme.color["green-5"]};
    color: ${({ theme }) => theme.color.white};
    border-radius: 15px;

    &:enabled:hover,
    &:enabled:focus {
      background-color: ${({ theme }) => theme.color["green-4"]};
      color: ${({ theme }) => theme.color.white};
    }
  }

  .react-calendar__tile--active {
    background-color: ${({ theme }) => theme.color["green-1"]};
    color: ${({ theme }) => theme.color.white};
    border-radius: 15px;

    &:enabled:hover,
    &:enabled:focus {
      background-color: ${({ theme }) => theme.color["green-2"]};
      color: ${({ theme }) => theme.color.white};
    }
  }

  .react-calendar__navigation {
    background: ${({ theme }) => theme.color["green-6"]};
    height: 60px;
    border-radius: 10px 10px 0 0;
    border-bottom: 2px solid ${({ theme }) => theme.color["green-5"]};

    span {
      font-size: 18px;
      font-weight: bold;
      color: ${({ theme }) => theme.color.green};
    }

    .react-calendar__navigation__prev-button,
    .react-calendar__navigation__next-button {
      background: transparent;
      width: 72px;
      font-size: 24px;
      color: ${({ theme }) => theme.color["green-1"]};
    }

    button {
      &:enabled:hover,
      &:enabled:focus {
        background: transparent;
      }
      &:disabled {
        color: ${({ theme }) => theme.color["gray-5"]};
      }
    }
  }
`;

export { Container };
