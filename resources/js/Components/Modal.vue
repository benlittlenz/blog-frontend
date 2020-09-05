<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >Create New Customer</h3>
              <div>
                <div class="sm:hidden">
                  <select
                    aria-label="Selected tab"
                    class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150"
                  >
                    <option>Basic Info</option>
                    <option>Address</option>
                  </select>
                </div>
                <div class="hidden sm:block">
                  <div class="border-b border-gray-200">
                    <nav class="-mb-px flex">
                      <a
                        href="#"
                        class="whitespace-no-wrap py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 focus:outline-none focus:text-gray-700"
                        :class="selected === 'Basic Info' ? 'border-b-4 border-indigo-800 text-gray-700' : 'hover:text-gray-700 hover:border-gray-300 focus:border-gray-300'"
                        @click="selected = 'Basic Info'"
                      >Basic Info</a>
                      <a
                        href="#"
                        class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 focus:outline-none focus:text-gray-700"
                        :class="selected === 'Address' ? 'border-b-4 border-indigo-800 text-gray-700' : 'hover:text-gray-700 hover:border-gray-300 focus:border-gray-300'"
                        @click="selected = 'Address'"
                      >Address</a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="selected === 'Basic Info'">
            <div class="mt-4">
              <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Company</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  class="form-input block w-full py-2 pl-2 sm:text-sm sm:leading-5"
                  placeholder="Absatronics"
                />
              </div>
            </div>

            <div class="mt-4">
              <label
                for="email"
                class="block text-sm font-medium leading-5 text-gray-700"
              >Contact Name</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  class="form-input block w-full py-2 pl-2 sm:text-sm sm:leading-5"
                  placeholder="Joe Doe"
                />
              </div>
            </div>

            <div class="mt-4">
              <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Contact #</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  class="form-input block w-full py-2 pl-2 sm:text-sm sm:leading-5"
                  placeholder="(1800) 584 5585"
                />
              </div>
            </div>

            <div class="mt-4">
              <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  class="form-input block w-full py-2 pl-2 sm:text-sm sm:leading-5"
                  placeholder="joe@doe.com"
                />
              </div>
            </div>
          </div>

          <div v-else>
            <div class="mt-4">
              <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Street 1</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  class="form-input block w-full py-2 pl-2  sm:text-sm sm:leading-5"
                  placeholder="123 Fake St."
                />
              </div>
            </div>

            <div class="mt-4">
              <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Street 2</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  class="form-input block w-full py-2 pl-2  sm:text-sm sm:leading-5"
                  placeholder="Apartment #123"
                />
              </div>
            </div>

            <div class="flex items-center">
              <div class="w-5/6 mr-2">
                <div class="mt-4">
                  <label for="email" class="block text-sm font-medium leading-5 text-gray-700">City</label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="email"
                      class="form-input block w-full py-2 pl-2  sm:text-sm sm:leading-5"
                      placeholder="Sydney"
                    />
                  </div>
                </div>
              </div>

              <div class="w-5/6 ml-2">
                <div class="mt-4">
                  <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Zip</label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="zip"
                      class="form-input block w-full py-2 pl-2  sm:text-sm sm:leading-5"
                      placeholder="1038"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >Create Customer</button>
          </span>
          <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >Cancel</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",

  data() {
    return {
      selected: "Basic Info"
    };
  }
};
</script>