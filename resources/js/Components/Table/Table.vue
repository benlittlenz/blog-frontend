<template>
  <main class="max-w-6xl mx-auto sm:px-6 lg:px-8 py-12">
    <div class="flex flex-col z-0 relative">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full border border-gray-200 overflow-hidden sm:rounded-lg">
          <table class="min-w-full">
            <thead>
              <tr class="border-b border-gray-200 bg-gray-50">
                <th
                  class="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >Invoice Date</th>
                <th
                  class="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >Customer</th>
                <th
                  class="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >Invoice #</th>
                <th
                  class="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >Amount Due</th>
                <th
                  class="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >Status</th>
                <th class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b border-gray-200">
                <td
                  class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-800"
                >27/10/20</td>
                <td
                  class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-800"
                >Ken Casper</td>
                <td
                  class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-800"
                >INV-012221</td>
                <td
                  class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-800"
                >$265.00</td>
                <td
                  class="px-6 py-4"
                >
                  <span
                    class="px-3 inline-flex text-sm leading-5 rounded-full bg-green-200 font-medium text-green-800"
                  >Invoice Paid</span>
                </td>
                <td
                  class="w-3 pr-2 py-4"
                >
                  <DropdownBtn />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import DropdownBtn from "./DropdownBtn";
export default {
  components: {
    DropdownBtn,
  }
};
</script>