import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

{/* <ul class="grid gap-6 w-full md:grid-cols-3">
                        <li>
                            <input type="checkbox" id="07-08 am" value="{07-08 am : true}" class="hidden peer" required="" 
                             onChange={(e) => SetTimeSlot([ ...timeSlot, e.target.value ])}
                            />
                            <label for="07-08 am" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                   <AccessTimeFilledIcon />
                                    <div class="w-full text-lg font-semibold mx-auto">07.00 - 08.00 am</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="10-11 am" value="{10-11 am: true}" class="hidden peer" required="" 
                            onChange={(e) => SetTimeSlot([ ...timeSlot, e.target.value ])}
                            />
                            <label for="10-11 am" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                   <AccessTimeFilledIcon />
                                    <div class="w-full text-lg font-semibold">10.00 - 11.00 am</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="01-02 pm" value="{01-02 pm: true}" class="hidden peer" required="" 
                           onChange={(e) => SetTimeSlot([ ...timeSlot, e.target.value ])}
                            />
                            <label for="01-02 pm" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                   <AccessTimeFilledIcon />
                                    <div class="w-full text-lg font-semibold">01.00 - 02.00 pm</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="04-05 pm" value="{04-05 pm: true}" class="hidden peer" required="" 
                            onChange={(e) => SetTimeSlot([ ...timeSlot, e.target.value ])}
                            />
                            <label for="04-05 pm" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                   <AccessTimeFilledIcon />
                                    <div class="w-full text-lg font-semibold">04.00 - 05.00 pm</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="07-08 pm" value="{07-08 pm: true}" class="hidden peer" required="" 
                            onChange={(e) => SetTimeSlot([ ...timeSlot, e.target.value ])}
                            />
                            <label for="07-08 pm" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                   <AccessTimeFilledIcon />
                                    <div class="w-full text-lg font-semibold">07.00 - 08.00 pm</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="10-11 pm" value="{10-11 pm: true}" class="hidden peer" required="" 
                           onChange={(e) => SetTimeSlot([ ...timeSlot, e.target.value ])}
                            />
                            <label for="10-11 pm" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                   <AccessTimeFilledIcon />
                                    <div class="w-full text-lg font-semibold">10.00 - 11.00 pm</div>
                                </div>
                            </label>
                        </li>
                    </ul> */}
