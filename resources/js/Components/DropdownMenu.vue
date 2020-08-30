<template>
    <transition
            enter-active-class="transition ease-in duration-200"
            leave-active-class="transition ease-out duration-100"
            enter-class="opacity-0 scale-70"
            enter-to-class="opacity-100 scale-100"
            leave-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-70"
        >
        <div 
            v-if="state"
            class="absolute right-0 mt-2 w-56 rounded-md shadow-lg z-30"
            
            >
                <div class="rounded-md bg-white shadow-xs">
                    <div class="py-1">
                        <a href="#" class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <svg 
                                viewBox="0 0 20 20" 
                                fill="currentColor" 
                                class="folder-open mr-3 w-5 h-5 text-gray-400">
                                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" /><path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                            </svg>
                            Details
                        </a>
                        <a href="#" class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <svg 
                                viewBox="0 0 20 20" 
                                fill="currentColor" 
                                class="pencil-alt mr-3 w-5 h-5 text-gray-400">
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                            </svg>
                            Edit
                        </a>
                        <a href="#" class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <svg 
                                viewBox="0 0 20 20" 
                                fill="currentColor" 
                                class="duplicate mr-3 w-5 h-5 text-gray-400">
                                <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                                <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                            </svg>
                            
                            Duplicate
                        </a>
                        <a href="#" class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <svg 
                                class="trash mr-3 w-5 h-5 text-gray-400" 
                                fill="currentColor" 
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                            </svg>
                            Delete
                        </a>
                    </div>
                    
                </div>

        </div>
    </transition>
</template>

<script>
export default {
    props: {
        state: {
            type: Boolean,
            require: true,
            default: false
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.setDropdownPosition()
        })
    },

    methods: {
        setDropdownPosition() {
            // let rect = this.$refs.dropdownItems.getBoundingClientRect()
            // let offsetPos = rect.width - this.$el.offsetWidth
            // let itemPos = rect.right + rect.width + offsetPos

            console.log(this.$refs)
        }
    }
}
</script>