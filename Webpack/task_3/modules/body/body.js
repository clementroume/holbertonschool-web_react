import $ from 'jquery';
import { debounce } from 'lodash';
import './body.css';

$(function () {
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');

  let count = 0;

  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  $('button').on('click', debounce(updateCounter, 500));
});
